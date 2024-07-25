const songs = [
    {
        title: "Crazy Frog - A Ring Ding Ding Ding",
        url: "https://www.dropbox.com/scl/fi/7i4d0yhs9xwqynegcnczj/Crazy-Frog-A-Ring-Ding-Ding-Ding.mp3?rlkey=3d2zd33ft9zw6z5vj99wwyci6&st=1bvy7kem&dl=1",
        image: "https://i1.sndcdn.com/artworks-LCw3L1Spsi62-0-t500x500.jpg"
    },
    {
        title: "Aliveness - Bemac",
        url: "https://www.dropbox.com/scl/fi/cv8wjd109x360zev0dfy1/Bemac-Aliveness.mp3?rlkey=e1m92wepaycokypekl3gocqf1&st=xllp081q&dl=1",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/a9/d2/d5a9d243-7fd6-0e67-ec06-92d43b73b5cf/cover.jpg/800x800cc.jpg"
    },
    {
        title: "Hot Since 82 featuring Ron Carroll - Preach",
        url: "https://www.dropbox.com/scl/fi/03fao4zjnpfaze28obsuq/Hot-Since-82-Preach-feat.-Ron-Carroll.mp3?rlkey=k0vcho9nzdsx0jj06wmrzrofe&st=9asne8u0&dl=1",
        image: "https://i1.sndcdn.com/artworks-iNDFenVRaEryextQ-jDqZQA-t500x500.jpg"
    },
    {
        title: "La Bebe (David Guetta Remix)",
        url: "https://dl.dropboxusercontent.com/scl/fi/uxokv9ygb5evabim4eppb/138_-_La_Bebe_David_Guetta_Remix.mp3?rlkey=qysfjdsde31j320u69j01hnc1&dl=1",
        image: "https://i1.sndcdn.com/artworks-SYMzgdpX0Dej-0-t500x500.jpg"
    },
    {
        title: "Ana Mena - Madrid City",
        url: "https://dl.dropboxusercontent.com/scl/fi/2d7i6egwj03tfc8e3widx/Ana-Mena-Madrid-City.mp3?rlkey=lgie3ez7icupc5a73ryl8oywp&dl=1",
        image: "https://i1.sndcdn.com/artworks-fra0JXxZD8DN-0-t500x500.jpg"
    },
    {
        title: "Dennis Lloyd - Alien",
        url: "https://dl.dropboxusercontent.com/scl/fi/hkk4of9rls704i5ng02q5/Dennis-Lloyd-Alien.mp3?rlkey=1lt000ttyijxgdw02y0oz6es5&dl=1",
        image: "https://i1.sndcdn.com/artworks-xQIWyZDO5uiA-0-t500x500.jpg"
    },
    {
        title: "FloyyMenor - Gata Only",
        url: "https://dl.dropboxusercontent.com/scl/fi/tth8wtmzi5lznzwv84mf4/FloyyMenor-Gata-Only.flac?rlkey=92wy0svqs2kx93qrcdr3afeop&dl=1",
        image: "https://i1.sndcdn.com/artworks-KXeorbUhT9T9dupU-04Hnvw-t500x500.jpg"
    },
    {
        title: "did i tell u that i miss u",
        url: "https://www.dropbox.com/scl/fi/ygd9ojyce99xe1vnzxcce/Adore-did-i-tell-u-that-i-miss-u.mp3?rlkey=gs3j4uz318fdurpgdscrej3u0&st=d2frgwph&dl=1",
        image: "https://i1.sndcdn.com/artworks-g6fViuM30nFQoUA3-Pjrzwg-t500x500.jpg"
    },
    {
        title: "Kevin de Vries & Mau P - Metro",
        url: "https://www.dropbox.com/scl/fi/0cfbxh2a6tgba9txkt0zs/Kevin-de-Vries-Metro.flac?rlkey=srca4oha7dablpdue1428615m&st=k3jlfkl4&dl=1",
        image: "https://i1.sndcdn.com/artworks-23FlYIM1q22N8vQq-iUtnRw-t500x500.jpg"
    },
    {
        title: "Teddy Swims - Lose Control (Tiësto Remix)",
        url: "https://www.dropbox.com/scl/fi/bxzimvfbjj5qftsoeu7x5/Teddy-Swims-Lose-Control-Ti-sto-Remix.mp3?rlkey=kuyngieg2vg38n1i9d86xazus&st=4nholh5h&dl=1",
        image: "https://i1.sndcdn.com/artworks-QYhiRtDt5hT7-0-t1080x1080.jpg"
    },
    {
        title: "Campbell Would You go to bed with me",
        url: "https://www.dropbox.com/scl/fi/skmke8ju0blo7a3i106jy/Campbell_Would_You_go_to_bed_with_me_feat_Caity_Baser.mp3?rlkey=5ka1a66yhmw5dkv25y788dd8o&st=bz88u2y6&dl=1",
        image: "https://m.media-amazon.com/images/I/61AyXVbz2aL._UXNaN_FMjpg_QL85_.jpg"
    },
    {
        title: "RÜFÜS DU SOL - Innerbloom (Radio Edit)",
        url: "https://www.dropbox.com/scl/fi/4wpxt2mfprsgus9vkvjmh/R-F-S-DU-SOL-Innerbloom-Radio-Edit.mp3?rlkey=0hv9i4juy6e9zmvi78ofvn0c2&st=73i0ykje&dl=1",
        image: "https://i1.sndcdn.com/artworks-oyOxyWPEKV9roW77-xS0TNQ-t1080x1080.jpg"
    },
    {
        title: "Milky Chance - Down By The River /// FlicFlac Edit",
        url: "https://www.dropbox.com/scl/fi/31xcjpvmwb0z6h7uogqwd/Milky-Chance-Down-By-The-River-FlicFlac-Edit-320.mp3?rlkey=lva2hb4qlq8m1hve0elovet50&st=thfvmbp9&dl=1",
        image: "https://i1.sndcdn.com/artworks-000147428579-rqidkn-t500x500.jpg"
    },
    {
        title: "Sander Van Doorn - Ori Tali Ma (LVNDSCAPE Remix)",
        url: "https://www.dropbox.com/scl/fi/pcfzltkcjwgc91ndkka1x/Sander-van-doorn-Ori-tali-ma-LVNDSCAPE-Remix.mp3?rlkey=d9h3k0c0yfoqblclrr9u7413z&st=2vvlklvn&dl=1",
        image: "https://i1.sndcdn.com/artworks-000127569843-kegcbw-t1080x1080.jpg"
    },
    {
        title: "Tomorrowland Mix (Dimitri Vegas & Like",
        url: "https://firebasestorage.googleapis.com/v0/b/bassdimensionclub.appspot.com/o/MUSICA%20MIX%2F03%20Tomorrowland%20(Dimitri%20Vegas%20%26%20Lik.mp3?alt=media&token=bae5b124-a4c0-4e0b-8eda-6faae641c5dc",
        image: "https://i1.sndcdn.com/artworks-6tvjWUO4kqf7qz1K-J6hyHg-t500x500.jpg"
    }
];

const radioStations = {
    fiestaMix: {
        title: "FiestaMix",
        url: "https://stream.zeno.fm/ynskkmwwn8iuv"
    },
    eighties: {
        title: "80s",
        url: "https://streams.bigfm.de/bigfm-mashup-64-aac?usid=0-0-L-A-A-06"
    },
    edm: {
        title: "EDM",
        url: "https://ibizasonica.streaming-pro.com:8001/bluemarlin"
    },
    rock: {
        title: "ROCK",
        url: "https://streams.bigfm.de/bigfm-dance-64-aac?usid=0-0-L-A-A-06"
    },
    newSongs: {
        title: "News Songs",
        url: "https://streams.bigfm.de/bigfm-urbanclubbeats-64-aac?usid=0-0-L-A-A-06"
    }
};

let currentSongIndex = -1;
let isPlaying = false;
let isRadioPlaying = false;
const radioPlayer = new Audio();

document.addEventListener('DOMContentLoaded', function() {
    const songsSlider = document.getElementById('songsSlider');
    const audioPlayer = document.getElementById('audioPlayer');
    const player = document.getElementById('player');
    const playerAlbumCover = document.getElementById('playerAlbumCover');
    const currentSongTitle = document.getElementById('currentSongTitle');
    const closePlayer = document.getElementById('closePlayer');
    const togglePlayerButton = document.getElementById('togglePlayerButton');
    const playPauseButton = document.getElementById('playPauseButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const stopButton = document.getElementById('stopButton');
    const progressBar = document.getElementById('progressBar');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationDisplay = document.getElementById('duration');
    const volumeSlider = document.getElementById('volumeSlider');
    const radioPlayPauseButton = document.getElementById('radioPlayPauseButton');
    const stopRadioButton = document.getElementById('stopRadioButton');
    const radioVolumeSlider = document.getElementById('radioVolumeSlider');
    const audioWave = document.getElementById('audioWave');
    const radioCurrentTime = document.getElementById('radioCurrentTime');
    const radioSwitches = document.querySelectorAll('.radio-switches input');

    const welcomeText = document.getElementById('welcomeText');
    const subText = document.getElementById('subText');

    const welcomeMessage = "BIENVENIDOS";
    const subMessage = "A DISFRUTAR LAS BUENAS CANCIONES";

    let isFirstLoad = true;

    function typeWelcomeText() {
        welcomeText.innerHTML = '';
        subText.innerHTML = '';
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < welcomeMessage.length) {
                welcomeText.innerHTML += welcomeMessage[index];
                index++;
            } else if (index < welcomeMessage.length + subMessage.length) {
                subText.innerHTML += subMessage[index - welcomeMessage.length];
                index++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    welcomeText.innerHTML = '';
                    subText.innerHTML = '';
                    index = 0;
                    setTimeout(() => {
                        typeWelcomeText();
                    }, 1000);
                }, 3000); // Espera 3 segundos antes de borrar y volver a escribir
            }
        }, 150); // Ajusta la velocidad de la escritura
    }

    typeWelcomeText();

    // Cargar la lista de canciones
    songs.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        songElement.innerHTML = `
            <img src="${song.image}" alt="${song.title}" crossorigin="anonymous">
            <div class="overlay">
                <button class="playButton"><i class="fas fa-play"></i></button>
                <p class="song-title">${song.title}</p>
                <button class="saveButton" onclick="window.open('${song.url}', '_blank')">Guardar</button>
                <p class="dominant-color" id="color${index}"></p>
            </div>
            <span class="song-number">${index + 1}</span>
        `;
        songElement.querySelector('.playButton').addEventListener('click', function() {
            togglePlayPauseSong(index, songElement.querySelector('.playButton'));
        });
        songsSlider.appendChild(songElement);

        // Obtener color dominante
        const img = songElement.querySelector('img');
        img.addEventListener('load', () => {
            const colorThief = new ColorThief();
            const dominantColor = colorThief.getColor(img);
            const dominantColorHex = rgbToHex(dominantColor[0], dominantColor[1], dominantColor[2]);
            document.getElementById(`color${index}`).textContent = dominantColorHex;
            document.getElementById(`color${index}`).style.color = dominantColorHex;
        });
    });

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    let isDragging = false;
    let startX;
    let scrollLeft;

    songsSlider.addEventListener('mousedown', (e) => {
        isDragging = true;
        songsSlider.classList.add('active');
        startX = e.pageX - songsSlider.offsetLeft;
        scrollLeft = songsSlider.scrollLeft;
    });

    songsSlider.addEventListener('mouseleave', () => {
        isDragging = false;
        songsSlider.classList.remove('active');
    });

    songsSlider.addEventListener('mouseup', () => {
        isDragging = false;
        songsSlider.classList.remove('active');
    });

    songsSlider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - songsSlider.offsetLeft;
        const walk = (x - startX) * 3; // Multiplica el desplazamiento para mayor velocidad
        songsSlider.scrollLeft = scrollLeft - walk;
    });

    function playSong(index) {
        if (!audioPlayer.paused && radioPlayer) {
            radioPlayer.pause();
            radioPlayPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }

        currentSongIndex = index;
        audioPlayer.src = songs[currentSongIndex].url;
        audioPlayer.play();
        currentSongTitle.textContent = songs[currentSongIndex].title;
        playerAlbumCover.src = songs[currentSongIndex].image;
        player.style.display = 'flex';
        isPlaying = true;
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        updatePlayPauseButtons();

        // Actualizar la animación de carga según la duración de la canción
        audioPlayer.addEventListener('loadedmetadata', function() {
            const duration = audioPlayer.duration;
            document.documentElement.style.setProperty('--duration', `${duration}s`);
            updateProgressBar();
        });
    }

    function togglePlayPauseSong(index, button) {
        if (currentSongIndex !== index) {
            if (currentSongIndex !== -1) {
                audioPlayer.pause();
                document.querySelectorAll('.song .playButton')[currentSongIndex].innerHTML = '<i class="fas fa-play"></i>';
                document.querySelectorAll('.song')[currentSongIndex].classList.remove('playing');
            }
            playSong(index);
            button.innerHTML = '<i class="fas fa-pause"></i>';
            button.parentElement.classList.add('playing');
        } else if (audioPlayer.paused) {
            audioPlayer.play();
            button.innerHTML = '<i class="fas fa-pause"></i>';
            button.parentElement.classList.add('playing');
        } else {
            audioPlayer.pause();
            button.innerHTML = '<i class="fas fa-play"></i>';
            button.parentElement.classList.remove('playing');
        }
        isPlaying = !audioPlayer.paused;
        updatePlayPauseButtons();
    }

    function togglePlayPause() {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
        updatePlayPauseButtons();
    }

    function playNext() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong(currentSongIndex);
    }

    function playPrevious() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playSong(currentSongIndex);
    }

    function updatePlayPauseButtons() {
        const buttons = document.querySelectorAll('.playButton');
        buttons.forEach((button, index) => {
            if (index === currentSongIndex && !audioPlayer.paused) {
                button.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                button.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    }

    function updateProgressBar() {
        const duration = audioPlayer.duration;
        const currentTime = audioPlayer.currentTime;

        progressBar.max = duration;
        progressBar.value = currentTime;

        currentTimeDisplay.textContent = formatTime(currentTime);
        durationDisplay.textContent = formatTime(duration);
    }

    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', playNext);
    prevButton.addEventListener('click', playPrevious);
    stopButton.addEventListener('click', function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
        updatePlayPauseButtons();
    });
    closePlayer.addEventListener('click', function() {
        player.style.display = 'none';
        audioPlayer.pause();
        isPlaying = false;
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        updatePlayPauseButtons();
    });

    togglePlayerButton.addEventListener('click', function() {
        player.classList.toggle('hidden');
        togglePlayerButton.innerHTML = player.classList.contains('hidden') ? '<i class="fas fa-caret-up"></i>' : '<i class="fas fa-caret-down"></i>';
    });

    volumeSlider.addEventListener('input', function() {
        audioPlayer.volume = volumeSlider.value;
    });

    audioPlayer.addEventListener('timeupdate', updateProgressBar);

    progressBar.addEventListener('input', function() {
        audioPlayer.currentTime = progressBar.value;
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    audioPlayer.addEventListener('ended', playNext);

    function playRadio() {
        if (!audioPlayer.paused && currentSongIndex !== -1) {
            audioPlayer.pause();
            isPlaying = false;
            updatePlayPauseButtons();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }

        // Solo seleccionar una estación de radio aleatoria en la primera carga
        if (isFirstLoad) {
            const stationKeys = Object.keys(radioStations);
            const randomStationKey = stationKeys[Math.floor(Math.random() * stationKeys.length)];
            const randomStation = radioStations[randomStationKey];

            radioPlayer.src = randomStation.url;
            radioPlayer.play();
            isRadioPlaying = true;
            radioPlayPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
            audioWave.innerHTML = '<span></span><span></span><span></span>';
            updateRadioTime();

            // Cambiar el video según la estación de radio seleccionada
            if (randomStationKey === 'fiestaMix') {
                changeVideo(0); // Cambia al video slider1
            } else if (randomStationKey === 'eighties') {
                changeVideo(1); // Cambia al video slider2
            } else if (randomStationKey === 'edm') {
                changeVideo(2); // Cambia al video slider3
            } else if (randomStationKey === 'rock') {
                changeVideo(3); // Cambia al video slider4
            } else if (randomStationKey === 'newSongs') {
                changeVideo(4); // Cambia al video slider5
            }

            // Actualizar los switches de las estaciones de radio
            updateRadioSwitches(randomStationKey);

            isFirstLoad = false;
        } else {
            if (!isRadioPlaying) {
                radioPlayer.play();
                isRadioPlaying = true;
                radioPlayPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
                audioWave.innerHTML = '<span></span><span></span><span></span>';
                updateRadioTime();
            }
        }
    }

    function updateRadioSwitches(activeStationKey) {
        radioSwitches.forEach(switchElement => {
            if (switchElement.id === activeStationKey) {
                switchElement.checked = true;
            } else {
                switchElement.checked = false;
            }
        });
    }

    function pauseRadio() {
        radioPlayer.pause();
        isRadioPlaying = false;
        radioPlayPauseButton.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
        audioWave.innerHTML = '';
        clearInterval(radioTimeInterval);
    }

    function stopRadio() {
        radioPlayer.pause();
        radioPlayer.currentTime = 0;
        isRadioPlaying = false;
        radioPlayPauseButton.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
        audioWave.innerHTML = '';
        clearInterval(radioTimeInterval);
        radioCurrentTime.textContent = '0:00';
        updateRadioSwitches(null); // Desactivar todos los switches
    }

    radioPlayPauseButton.addEventListener('click', function() {
        if (isRadioPlaying) {
            pauseRadio();
        } else {
            playRadio();
        }
    });

    stopRadioButton.addEventListener('click', stopRadio);

    radioVolumeSlider.addEventListener('input', function() {
        radioPlayer.volume = radioVolumeSlider.value;
    });

    let radioTimeInterval;

    function updateRadioTime() {
        radioTimeInterval = setInterval(() => {
            radioCurrentTime.textContent = formatTime(radioPlayer.currentTime);
        }, 1000);
    }

    // Slider de video
    const videos = document.querySelectorAll('.video-slider video');
    let currentVideoIndex = 0;

    document.getElementById('prevVideo').addEventListener('click', () => {
        videos[currentVideoIndex].classList.remove('active');
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        videos[currentVideoIndex].classList.add('active');
    });

    document.getElementById('nextVideo').addEventListener('click', () => {
        videos[currentVideoIndex].classList.remove('active');
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        videos[currentVideoIndex].classList.add('active');
    });

    // Cambiar el fondo del header al desplazarse
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#000';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    // Nuevo reproductor moderno
    const modernPlayerTrackList = document.getElementById('trackList');
    const albumCover = document.getElementById('albumCover');
    const imagePlayButton = document.getElementById('imagePlayButton');
    const modernAudioPlayer = new Audio();
    let currentModernSongIndex = -1;

    const modernSongs = [
        {
            title: "Deorro - La Cita (feat. Ally Brooke)",
            url: "https://dl.dropboxusercontent.com/scl/fi/246r0es5rxipl5gzjh8yj/Deorro-La-Cita-feat.-Ally-Brooke.mp3?rlkey=i3qhku91leszgked1han9n2x7&dl=1",
            image: "https://i1.sndcdn.com/artworks-iOVQbabiVBse-0-t500x500.jpg"
        },
        {
            title: "Martin Garrix - Yottabyte",
            url: "https://dl.dropboxusercontent.com/scl/fi/9nffqz3np6ssee8y3ruxk/Martin-Garrix-Yottabyte.mp3?rlkey=j14qyh285cbhj02fbchc8f605&dl=1",
            image: "https://i1.sndcdn.com/artworks-000421607583-on37y5-t500x500.jpg"
        },
        {
            title: "Mueve La Cintura - ft. Tito El Bambino & Guru Randhawa",
            url: "https://dl.dropboxusercontent.com/scl/fi/6vefqf80d5hlyz2ap115h/Pitbull-Mueve-La-Cintura.mp3?rlkey=woyx00gi0u5ohkoxwuzm3rb5z&dl=1",
            image: "https://i1.sndcdn.com/artworks-000605215330-tjoub8-t500x500.jpg"
        },
        {
            title: "Mix 001",
            url: "https://dl.dropboxusercontent.com/scl/fi/s9g2sec39o1hlc818fwpi/Electro-Club-Mix-2018-Vol.34-DJ-Wide.mp3?rlkey=4fiisqoqvv96u1qcjrpkidlq9&dl=1",
            image: "https://i1.sndcdn.com/artworks-000605215330-tjoub8-t500x500.jpg"
        }
    ];

    modernSongs.forEach((song, index) => {
        const trackElement = document.createElement('li');
        trackElement.innerHTML = `${song.title} <button class="playButton"><i class="fas fa-play"></i></button>`;
        trackElement.querySelector('.playButton').addEventListener('click', function(event) {
            event.stopPropagation();
            playModernSong(index);
        });
        modernPlayerTrackList.appendChild(trackElement);
    });

    function playModernSong(index) {
        if (currentModernSongIndex !== index) {
            if (currentModernSongIndex !== -1) {
                modernAudioPlayer.pause();
            }
            currentModernSongIndex = index;
            const song = modernSongs[index];
            albumCover.src = song.image;
            modernAudioPlayer.src = song.url;
            modernAudioPlayer.play();
        } else {
            if (modernAudioPlayer.paused) {
                modernAudioPlayer.play();
            } else {
                modernAudioPlayer.pause();
            }
        }
        updateModernPlayPauseButtons();
    }

    imagePlayButton.addEventListener('click', function() {
        if (currentModernSongIndex !== -1) {
            playModernSong(currentModernSongIndex);
        }
    });

    function updateModernPlayPauseButtons() {
        document.querySelectorAll('.tracklist li').forEach((li, i) => {
            if (i === currentModernSongIndex && !modernAudioPlayer.paused) {
                li.classList.add('playing');
                li.querySelector('.playButton').innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                li.classList.remove('playing');
                li.querySelector('.playButton').innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        if (!modernAudioPlayer.paused) {
            albumCover.parentElement.classList.add('playing');
            imagePlayButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            albumCover.parentElement.classList.remove('playing');
            imagePlayButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    modernAudioPlayer.addEventListener('ended', function() {
        document.querySelectorAll('.tracklist li').forEach((li) => {
            li.classList.remove('playing');
            li.querySelector('.playButton').innerHTML = '<i class="fas fa-play"></i>';
        });
        albumCover.parentElement.classList.remove('playing');
        imagePlayButton.innerHTML = '<i class="fas fa-play"></i>';
        currentModernSongIndex = -1;
    });

    // Funcionalidad para los switches de estaciones de radio
    radioSwitches.forEach(switchElement => {
        switchElement.addEventListener('change', function() {
            if (this.checked) {
                const station = radioStations[this.id];
                if (station) {
                    playRadioStation(station);
                }
                if (this.id === 'fiestaMix') {
                    changeVideo(0); // Cambia al video slider1 cuando el switch FiestaMix se active
                } else if (this.id === 'eighties') {
                    changeVideo(1); // Cambia al video slider2 cuando el switch 80s se active
                } else if (this.id === 'edm') {
                    changeVideo(2); // Cambia al video slider3 cuando el switch EDM se active
                } else if (this.id === 'rock') {
                    changeVideo(3); // Cambia al video slider4 cuando el switch ROCK se active
                } else if (this.id === 'newSongs') {
                    changeVideo(4); // Cambia al video slider5 cuando el switch News Songs se active
                }
            } else {
                stopRadio();
            }
            radioSwitches.forEach(otherSwitch => {
                if (otherSwitch !== this) {
                    otherSwitch.checked = false;
                }
            });
        });
    });

    function playRadioStation(station) {
        if (!audioPlayer.paused && currentSongIndex !== -1) {
            audioPlayer.pause();
            isPlaying = false;
            updatePlayPauseButtons();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
        radioPlayer.src = station.url;
        radioPlayer.play();
        isRadioPlaying = true;
        radioPlayPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        audioWave.innerHTML = '<span></span><span></span><span></span>';
        updateRadioTime();
    }

    function changeVideo(index) {
        videos[currentVideoIndex].classList.remove('active');
        currentVideoIndex = index;
        videos[currentVideoIndex].classList.add('active');
    }

    // Funcionalidad del carrusel de canciones
    const prevSongButton = document.getElementById('prevSong');
    const nextSongButton = document.getElementById('nextSong');
    let currentSlide = 0;

    function updateCarousel() {
        const totalSongs = songs.length;
        const songsToShow = Math.floor(window.innerWidth / 240); // Aproximadamente 240px por canción incluyendo márgenes
        const maxSlide = totalSongs - songsToShow;
        currentSlide = (currentSlide + totalSongs) % totalSongs; // Ajustar para desplazamiento infinito
        const offset = -currentSlide * 300; // Ajustar el valor de desplazamiento
        songsSlider.style.transform = `translateX(${offset}px)`;
    }

    prevSongButton.addEventListener('click', () => {
        currentSlide--;
        updateCarousel();
    });

    nextSongButton.addEventListener('click', () => {
        currentSlide++;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel(); // Inicializar el carrusel
});
