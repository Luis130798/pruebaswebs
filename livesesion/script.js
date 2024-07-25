document.addEventListener("DOMContentLoaded", async function() {
    const showIds = [
        '1132914986','1272681420', '1482399861', '1233359606', '443158849', '1508635387', '662093445', 
        '686784798', '528277849', '887568816', '251507798', '438986034', '591042644', 
        '1555784520', '441403332', '1076380577', '1455965877', '561124694', '1236253646', 
        '395713233', '963859436', '315306641', '351975870', '911777602', '285097604', 
        '564352571', '1166214992', '323449796', '427084084'
    ];
    let currentShowIndex = 0;
    let episodes = [];
    let currentIndex = 0;
    const itemsPerPage = 5;
    const carousel = document.querySelector('.carousel');
    const carouselTrack = document.querySelector('.carousel-track');
    const episodesList = document.getElementById('episodes');
    const showMoreButton = document.getElementById('show-more-button');
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause');
    const prevTrackButton = document.getElementById('prev-track');
    const nextTrackButton = document.getElementById('next-track');
    const seekBar = document.getElementById('seek-bar');
    const volumeBar = document.getElementById('volume-bar');
    const currentTimeElement = document.getElementById('current-time');
    const totalTimeElement = document.getElementById('total-time');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
    const episodeListContainer = document.querySelector('.episode-list-container');
    const playerBackgroundBlur = document.getElementById('player-background-blur');
    let currentEpisodeButton = null;
    let isTransitioning = false;
    let currentEpisodeIndex = 0;

    gridViewButton.addEventListener('click', () => {
        episodeListContainer.classList.remove('list-view');
        episodeListContainer.classList.add('grid-view');
    });

    listViewButton.addEventListener('click', () => {
        episodeListContainer.classList.remove('grid-view');
        episodeListContainer.classList.add('list-view');
    });

    async function fetchShowDetails(showId) {
        const url = `https://itunes.apple.com/lookup?id=${showId}&media=podcast&entity=podcastEpisode`;
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    }

    function createCarouselItem(show) {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        
        const img = document.createElement('img');
        img.src = show.artworkUrl600;
        img.alt = show.collectionName;
        img.loading = 'lazy';
        
        const title = document.createElement('p');
        title.classList.add('show-title');
        title.textContent = show.collectionName;
        
        item.appendChild(img);
        item.appendChild(title);
        item.addEventListener('click', () => loadShow(show.collectionId));
        
        return item;
    }

    async function loadCarousel() {
        for (const showId of showIds) {
            const showDetails = await fetchShowDetails(showId);
            if (showDetails && showDetails.length > 0) {
                const show = showDetails[0];
                carouselTrack.appendChild(createCarouselItem(show));
            }
        }
    }

    async function loadShow(showId) {
        const data = await fetchShowDetails(showId);
        if (data && data.length > 0) {
            const podcast = data[0];
            document.getElementById('podcast-title').textContent = podcast.collectionName;
            document.getElementById('podcast-image').src = podcast.artworkUrl600;

            // Update background blur
            playerBackgroundBlur.style.backgroundImage = `url(${podcast.artworkUrl600})`;
            playerBackgroundBlur.style.display = 'block';

            episodes = data.slice(1);
            episodesList.innerHTML = ''; // Clear existing episodes
            currentIndex = 0;
            showMoreButton.style.display = 'block'; // Show the "Show More" button

            if (episodes.length > 0) {
                currentEpisodeIndex = 0;
                playEpisode(episodes[0]);
            }

            showMoreEpisodes(); // Show initial episodes
        }
    }

    function createEpisodeItem(episode, index) {
        const episodeItem = document.createElement('div');
        episodeItem.classList.add('episode-item');

        const episodeTitle = document.createElement('h3');
        episodeTitle.textContent = episode.trackName;

        const playButton = document.createElement('button');
        playButton.classList.add('play-button');
        playButton.innerHTML = '<i class="fas fa-play"></i>'; // Play icon
        playButton.addEventListener('click', () => {
            if (currentEpisodeButton && currentEpisodeButton !== playButton) {
                currentEpisodeButton.innerHTML = '<i class="fas fa-play"></i>'; // Play icon
            }

            if (audioPlayer.src !== episode.episodeUrl) {
                playEpisode(episode, index);
                playButton.innerHTML = '<i class="fas fa-pause"></i>'; // Pause icon
                currentEpisodeButton = playButton;
            } else if (audioPlayer.paused) {
                audioPlayer.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>'; // Pause icon
            } else {
                audioPlayer.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>'; // Play icon
            }
        });

        episodeItem.appendChild(episodeTitle);
        episodeItem.appendChild(playButton);

        return episodeItem;
    }

    function showMoreEpisodes() {
        const fragment = document.createDocumentFragment();
        const nextIndex = currentIndex + itemsPerPage;
        const episodesToShow = episodes.slice(currentIndex, nextIndex);
        episodesToShow.forEach((episode, index) => {
            fragment.appendChild(createEpisodeItem(episode, currentIndex + index));
        });
        episodesList.appendChild(fragment);
        currentIndex = nextIndex;

        if (currentIndex >= episodes.length) {
            showMoreButton.style.display = 'none'; // Hide the "Show More" button if no more episodes
        }
    }

    showMoreButton.addEventListener('click', showMoreEpisodes);

    function moveCarousel(offset) {
        if (isTransitioning) return;
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        currentShowIndex = (currentShowIndex + offset + totalItems) % totalItems;
        carouselTrack.style.transition = 'transform 0.5s ease';
        carouselTrack.style.transform = `translateX(-${currentShowIndex * 220}px)`;
        isTransitioning = true;
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    document.getElementById('prev-button').addEventListener('click', () => {
        moveCarousel(-1);
    });

    document.getElementById('next-button').addEventListener('click', () => {
        moveCarousel(1);
    });

    function playEpisode(episode, index = 0) {
        document.getElementById('episode-title').textContent = episode.trackName;
        document.getElementById('audio-source').src = episode.episodeUrl;
        audioPlayer.load();
        audioPlayer.play();
        currentEpisodeIndex = index;
    }

    prevTrackButton.addEventListener('click', () => {
        if (currentEpisodeIndex > 0) {
            currentEpisodeIndex--;
            playEpisode(episodes[currentEpisodeIndex]);
        }
    });

    nextTrackButton.addEventListener('click', () => {
        if (currentEpisodeIndex < episodes.length - 1) {
            currentEpisodeIndex++;
            playEpisode(episodes[currentEpisodeIndex]);
        }
    });

    await loadCarousel();
    loadShow(showIds[0]);

    audioPlayer.addEventListener('play', () => {
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        if (currentEpisodeButton) {
            currentEpisodeButton.innerHTML = '<i class="fas fa-pause"></i>'; // Pause icon
        }
    });

    audioPlayer.addEventListener('pause', () => {
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        if (currentEpisodeButton) {
            currentEpisodeButton.innerHTML = '<i class="fas fa-play"></i>'; // Play icon
        }
    });

    audioPlayer.addEventListener('ended', () => {
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        if (currentEpisodeButton) {
            currentEpisodeButton.innerHTML = '<i class="fas fa-play"></i>'; // Play icon
        }
    });

    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });

    audioPlayer.addEventListener('timeupdate', () => {
        seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
        totalTimeElement.textContent = formatTime(audioPlayer.duration);
    });

    seekBar.addEventListener('input', () => {
        audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
    });

    volumeBar.addEventListener('input', () => {
        audioPlayer.volume = volumeBar.value / 100;
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
});
