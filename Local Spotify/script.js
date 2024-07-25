const clientId = '6bebbfb6ba3241fd979b09e67d89296a';
const clientSecret = 'dc6a5b03d3a148f5a2ea95f6a39e60c2';
const playlistId = '09CjhKwde4MU5EmaU7wakk'; // Reemplaza esto con el ID de tu lista de reproducción de Spotify
let token;
let tracks = [];
let currentIndex = 0;
let currentAudio = new Audio();
let currentTrackIndex = null;
let progressInterval = null;
let csvData = [];

// Obtener el token de acceso desde Spotify
const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    token = data.access_token;
    return token;
};

// Cargar datos del archivo CSV
const loadCSV = async () => {
    const response = await fetch('tracks.csv');
    const csvText = await response.text();
    csvData = Papa.parse(csvText, { header: true }).data;
};

// Cargar la lista de reproducción de Spotify
const loadPlaylist = async () => {
    const result = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });
    const data = await result.json();

    // Filtrar y mapear los datos de Spotify y CSV
    const trackSet = new Set(csvData.map(item => item.track_id));
    tracks = data.tracks.items.filter(item => trackSet.has(item.track.id));

    const playlistElement = document.getElementById('playlist');
    const trackHtml = tracks.map((item, index) => {
        const track = item.track;
        const csvTrack = csvData.find(csvItem => csvItem.track_id === track.id);
        const trackImage = track.album.images[0].url; // Usar la imagen de mayor resolución
        const trackUrl = track.external_urls.spotify;

        return `
            <div class="carousel-item">
                <div class="track-item">
                    <img src="${trackImage}" alt="${track.name}">
                    <div class="song-info">
                        <div class="song-title">${track.name}</div>
                        <div class="song-artist"><a href="${track.artists[0].external_urls.spotify}" target="_blank">${track.artists[0].name}</a></div>
                        <div class="song-album"><a href="${track.album.external_urls.spotify}" target="_blank">${track.album.name}</a></div>
                        <a href="${trackUrl}" target="_blank">Listen on Spotify</a>
                        <div class="controls">
                            <button class="play-preview" data-preview-url="${csvTrack.audio_url}" data-index="${index}">
                                <i class="fa fa-play"></i>
                            </button>
                            <button class="more-options-button">
                                <i></i>
                                <i></i>
                                <i></i>
                            </button>
                            <div class="more-options-menu">
                                <a href="#" class="copy-name" data-track-name="${track.name}">Copy Name</a>
                                <a href="#" class="search-video" data-track-name="${track.name}" data-artist-name="${track.artists[0].name}">Search Video</a>
                            </div>
                        </div>
                        <div class="progress-bar" data-index="${index}">
                            <div class="progress-bar-inner"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Asignar los elementos de la lista de reproducción sin duplicar
    playlistElement.innerHTML = trackHtml;

    document.querySelectorAll('.play-preview').forEach(button => {
        button.addEventListener('click', (e) => {
            const previewUrl = button.getAttribute('data-preview-url');
            const trackIndex = parseInt(button.getAttribute('data-index'));
            playPreview(previewUrl, trackIndex, button);
        });
    });

    document.querySelectorAll('.progress-bar').forEach(bar => {
        bar.addEventListener('click', (e) => {
            const trackIndex = parseInt(bar.getAttribute('data-index'));
            if (currentTrackIndex === trackIndex) {
                const progress = (e.offsetX / bar.offsetWidth) * currentAudio.duration;
                currentAudio.currentTime = progress;
            }
        });
    });

    document.querySelectorAll('.more-options-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const menu = button.nextElementSibling;
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            e.stopPropagation();
        });
    });

    document.querySelectorAll('.copy-name').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.classList.add('pressed');
            const trackName = link.getAttribute('data-track-name');
            navigator.clipboard.writeText(trackName);
            setTimeout(() => link.classList.remove('pressed'), 100);
        });
    });

    document.querySelectorAll('.search-video').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.classList.add('pressed');
            const trackName = link.getAttribute('data-track-name');
            const artistName = link.getAttribute('data-artist-name');
            const searchQuery = `${trackName} ${artistName}`;
            const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
            window.open(searchUrl, '_blank');
            setTimeout(() => link.classList.remove('pressed'), 100);
        });
    });

    document.addEventListener('click', (e) => {
        document.querySelectorAll('.more-options-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    });

    document.querySelectorAll('.more-options-menu').forEach(menu => {
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
};

const playPreview = (previewUrl, trackIndex, button) => {
    const allButtons = document.querySelectorAll('.play-preview');
    allButtons.forEach(btn => {
        btn.innerHTML = '<i class="fa fa-play"></i>';
        btn.classList.remove('playing');
        clearInterval(progressInterval);
        const progressBar = btn.closest('.song-info').querySelector('.progress-bar-inner');
        progressBar.style.width = '0%';
    });

    if (currentTrackIndex === trackIndex && !currentAudio.paused) {
        currentAudio.pause();
        currentTrackIndex = null;
    } else {
        if (!currentAudio.paused) currentAudio.pause();
        currentTrackIndex = trackIndex;
        currentAudio.src = previewUrl;
        currentAudio.play();
        button.classList.add('playing');
        button.innerHTML = '<i class="fa fa-pause"></i>';
        updateProgressBar(button);
    }

    currentAudio.onended = () => {
        button.innerHTML = '<i class="fa fa-play"></i>';
        button.classList.remove('playing');
        clearInterval(progressInterval);
        const progressBar = button.closest('.song-info').querySelector('.progress-bar-inner');
        progressBar.style.width = '0%';
        playNextTrack();
    };
};

const updateProgressBar = (button) => {
    const progressBar = button.closest('.song-info').querySelector('.progress-bar-inner');
    progressInterval = setInterval(() => {
        const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
        progressBar.style.width = `${progress}%`;
    }, 100);
};

const moveCarousel = (direction) => {
    const totalItems = tracks.length;
    const carouselInner = document.querySelector('.carousel-inner');

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalItems;
        carouselInner.style.transition = 'transform 0.5s ease';
        carouselInner.style.transform = `translateX(-${currentIndex * 33.33}%)`;
        if (currentIndex === 0) {
            setTimeout(() => {
                carouselInner.style.transition = 'none';
                carouselInner.style.transform = `translateX(0%)`;
                currentIndex = 0;
            }, 500);
        }
    } else {
        if (currentIndex === 0) {
            carouselInner.style.transition = 'none';
            currentIndex = totalItems;
            carouselInner.style.transform = `translateX(-${currentIndex * 33.33}%)`;
        }
        setTimeout(() => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            carouselInner.style.transition = 'transform 0.5s ease';
            carouselInner.style.transform = `translateX(-${currentIndex * 33.33}%)`;
        }, 20);
    }
};

const playNextTrack = () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    const nextButton = document.querySelector(`.play-preview[data-index="${currentTrackIndex}"]`);
    if (nextButton) {
        const previewUrl = nextButton.getAttribute('data-preview-url');
        playPreview(previewUrl, currentTrackIndex, nextButton);
    }
    moveCarousel('next'); // Move the carousel to the next item
};

document.addEventListener('DOMContentLoaded', async () => {
    await getToken();
    await loadCSV();
    await loadPlaylist();

    document.getElementById('prev-button').addEventListener('click', () => {
        moveCarousel('prev');
    });

    document.getElementById('next-button').addEventListener('click', () => {
        moveCarousel('next');
    });
});
