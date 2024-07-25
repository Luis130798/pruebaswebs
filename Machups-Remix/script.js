document.addEventListener("DOMContentLoaded", () => {
  let currentSongIndex = -1;
  let songs = [];
  let filteredSongs = [];
  let songsToShow = 10;
  let totalSongsShown = 0;
  let isPlaying = false;
  let currentTime = 0;

  fetch('songs.csv')
    .then(response => response.text())
    .then(data => {
      Papa.parse(data, {
        header: true,
        complete: function(results) {
          songs = results.data;
          populateFilters(songs);
          filteredSongs = songs;
          displaySongs(filteredSongs.slice(0, songsToShow));
          totalSongsShown = songsToShow;
          loadSong(0, false); // Load the first song without playing it
        }
      });
    })
    .catch(error => console.error('Error fetching CSV:', error));

  const displaySongs = (songs) => {
    const songList = document.getElementById('song-list');
    songList.innerHTML = ''; // Clear existing songs
    songs.forEach((song, index) => {
      const songItem = document.createElement('div');
      songItem.classList.add('song-item');
      songItem.dataset.index = index;
      songItem.innerHTML = `
        <img src="${song.cover}" alt="${song.nombre}">
        <div class="song-info">
          <p>${song.nombre}</p>
          <p>${song.artista}</p>
        </div>
        <div class="song-actions">
          <i class="fas fa-play play-button"></i>
          <i class="fas fa-ellipsis-v more-options"></i>
          <div class="more-options-menu">
            <a href="#" class="download-song">Download</a>
          </div>
        </div>
      `;
      songItem.querySelector('.play-button').addEventListener('click', (e) => {
        e.stopPropagation();
        handlePlayPauseClick(index, songItem);
      });
      songItem.querySelector('.more-options').addEventListener('click', (e) => {
        e.stopPropagation();
        const menu = songItem.querySelector('.more-options-menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      });
      songItem.querySelector('.download-song').addEventListener('click', (e) => {
        e.stopPropagation();
        downloadSong(song.url);
      });
      songList.appendChild(songItem);
    });

    updatePlayPauseButtons();
  };

  const handlePlayPauseClick = (index, songItem) => {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = songItem.querySelector('.play-button');

    if (index === currentSongIndex) {
      if (isPlaying) {
        audioPlayer.pause();
        currentTime = audioPlayer.currentTime;
        isPlaying = false;
        playPauseButton.classList.replace('fa-pause', 'fa-play');
      } else {
        audioPlayer.currentTime = currentTime; // Resume from the last position
        audioPlayer.play();
        isPlaying = true;
        playPauseButton.classList.replace('fa-play', 'fa-pause');
      }
    } else {
      if (isPlaying) {
        const currentSongItem = document.querySelector(`.song-item[data-index='${currentSongIndex}']`);
        if (currentSongItem) {
          const currentPlayPauseButton = currentSongItem.querySelector('.play-button');
          currentPlayPauseButton.classList.replace('fa-pause', 'fa-play');
        }
      }
      currentSongIndex = index;
      currentTime = 0; // Reset the current time
      loadSong(currentSongIndex, true);
      isPlaying = true;
      playPauseButton.classList.replace('fa-play', 'fa-pause');
    }
  };

  const loadSong = (index, playImmediately) => {
    const song = filteredSongs[index];
    const currentSongImage = document.getElementById('current-song-image');
    const currentSongTitle = document.getElementById('current-song-title');
    const currentSongArtist = document.getElementById('current-song-artist');
    const audioPlayer = document.getElementById('audio-player');
    const currentSongDiv = document.getElementById('current-song');
    const backgroundOverlay = document.getElementById('background-overlay');
    const playPauseButton = document.getElementById('play-pause-button');

    currentSongImage.src = song.cover;
    currentSongTitle.textContent = song.nombre;
    currentSongArtist.textContent = song.artista;
    audioPlayer.src = song.url;
    audioPlayer.currentTime = 0; // Start from the beginning
    backgroundOverlay.style.backgroundImage = `url(${song.cover})`;
    currentSongDiv.classList.remove('hidden');
    
    if (playImmediately) {
      audioPlayer.play();
      playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
  };

  const togglePlayPause = () => {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-button');
    const currentSongItem = document.querySelector(`.song-item[data-index='${currentSongIndex}']`);
    const currentPlayPauseButton = currentSongItem.querySelector('.play-button');

    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
      currentPlayPauseButton.classList.replace('fa-play', 'fa-pause');
      isPlaying = true;
    } else {
      audioPlayer.pause();
      currentTime = audioPlayer.currentTime;
      playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
      currentPlayPauseButton.classList.replace('fa-pause', 'fa-play');
      isPlaying = false;
    }
  };

  const nextSong = () => {
    currentSongIndex = (currentSongIndex + 1) % filteredSongs.length;
    currentTime = 0; // Reset the current time
    loadSong(currentSongIndex, true);
    updatePlayPauseButtons();
  };

  const prevSong = () => {
    currentSongIndex = (currentSongIndex - 1 + filteredSongs.length) % filteredSongs.length;
    currentTime = 0; // Reset the current time
    loadSong(currentSongIndex, true);
    updatePlayPauseButtons();
  };

  const updatePlayPauseButtons = () => {
    document.querySelectorAll('.play-button').forEach(button => {
      button.classList.replace('fa-pause', 'fa-play');
    });
    if (isPlaying && currentSongIndex !== -1) {
      const currentSongItem = document.querySelector(`.song-item[data-index='${currentSongIndex}']`);
      const currentPlayPauseButton = currentSongItem.querySelector('.play-button');
      currentPlayPauseButton.classList.replace('fa-play', 'fa-pause');
    }
  };

  document.getElementById('play-pause-button').addEventListener('click', togglePlayPause);
  document.getElementById('next-button').addEventListener('click', nextSong);
  document.getElementById('prev-button').addEventListener('click', prevSong);

  const volumeControl = document.getElementById('volume-control');
  volumeControl.addEventListener('input', (e) => {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.volume = e.target.value;
  });

  const seekBar = document.getElementById('seek-bar');
  const audioPlayer = document.getElementById('audio-player');
  const currentTimeDisplay = document.getElementById('current-time');
  const totalTimeDisplay = document.getElementById('total-time');

  audioPlayer.addEventListener('timeupdate', () => {
    seekBar.value = audioPlayer.currentTime / audioPlayer.duration;
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    totalTimeDisplay.textContent = formatTime(audioPlayer.duration);
  });

  seekBar.addEventListener('input', () => {
    audioPlayer.currentTime = seekBar.value * audioPlayer.duration;
  });

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const downloadSong = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const populateFilters = (songs) => {
    const genreFilter = document.getElementById('genre-filter');
    const djFilter = document.getElementById('dj-filter');
    const yearFilter = document.getElementById('year-filter');

    const genres = [...new Set(songs.map(song => song.genero))];
    const djs = [...new Set(songs.map(song => song.dj))];
    const years = [...new Set(songs.map(song => song.año))];

    genres.forEach(genre => {
      const option = document.createElement('option');
      option.value = genre;
      option.textContent = genre;
      genreFilter.appendChild(option);

      const genreListItem = document.createElement('li');
      const genreLink = document.createElement('a');
      genreLink.href = '#';
      genreLink.textContent = genre;
      genreLink.dataset.filter = genre;
      genreLink.addEventListener('click', (e) => {
        e.preventDefault();
        filterByGenre(genre);
        displayDetailList(filteredSongs.filter(song => song.genero === genre));
      });
      genreListItem.appendChild(genreLink);
      document.getElementById('genre-list').appendChild(genreListItem);
    });

    djs.forEach(dj => {
      const option = document.createElement('option');
      option.value = dj;
      option.textContent = dj;
      djFilter.appendChild(option);

      const djListItem = document.createElement('li');
      const djLink = document.createElement('a');
      djLink.href = '#';
      djLink.textContent = dj;
      djLink.dataset.filter = dj;
      djLink.addEventListener('click', (e) => {
        e.preventDefault();
        filterByDJ(dj);
        displayDetailList(filteredSongs.filter(song => song.dj === dj));
      });
      djListItem.appendChild(djLink);
      document.getElementById('artist-list').appendChild(djListItem);
    });

    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearFilter.appendChild(option);

      const yearListItem = document.createElement('li');
      const yearLink = document.createElement('a');
      yearLink.href = '#';
      yearLink.textContent = year;
      yearLink.dataset.filter = year;
      yearLink.addEventListener('click', (e) => {
        e.preventDefault();
        filterByYear(year);
        displayDetailList(filteredSongs.filter(song => song.año === year));
      });
      yearListItem.appendChild(yearLink);
      document.getElementById('year-list').appendChild(yearListItem);
    });

    genreFilter.addEventListener('change', filterSongs);
    djFilter.addEventListener('change', filterSongs);
    yearFilter.addEventListener('change', filterSongs);
    document.getElementById('recent-filter').addEventListener('change', filterSongs);
  };

  const filterByGenre = (genre) => {
    document.getElementById('genre-filter').value = genre;
    filterSongs();
  };

  const filterByDJ = (dj) => {
    document.getElementById('dj-filter').value = dj;
    filterSongs();
  };

  const filterByYear = (year) => {
    document.getElementById('year-filter').value = year;
    filterSongs();
  };

  const filterSongs = () => {
    const genre = document.getElementById('genre-filter').value;
    const dj = document.getElementById('dj-filter').value;
    const year = document.getElementById('year-filter').value;
    const recent = document.getElementById('recent-filter').value;

    filteredSongs = songs.filter(song => {
      return (genre === 'all' || song.genero === genre) &&
             (dj === 'all' || song.dj === dj) &&
             (year === 'all' || song.año === year) &&
             (recent === 'all' || (recent === 'recent' && new Date(song.fecha_añadida) > new Date(Date.now() - 30*24*60*60*1000)));
    });

    if (year !== 'all') {
      filteredSongs.sort((a, b) => b.año - a.año); // Sort by year descending
    }

    displaySongs(filteredSongs.slice(0, songsToShow));
    totalSongsShown = songsToShow;
    resetPlayPauseButtons();
  };

  const resetPlayPauseButtons = () => {
    document.querySelectorAll('.play-button').forEach(button => {
      button.classList.replace('fa-pause', 'fa-play');
    });
    const playPauseButton = document.getElementById('play-pause-button');
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    isPlaying = false;
  };

  document.getElementById('load-more').addEventListener('click', () => {
    totalSongsShown += songsToShow;
    displaySongs(filteredSongs.slice(0, totalSongsShown));
  });

  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('more-options')) {
      document.querySelectorAll('.more-options-menu').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });

  // Video background functionality
  document.getElementById('video-button').addEventListener('click', () => {
    const videoModeSelector = document.getElementById('video-mode-selector');
    videoModeSelector.style.display = videoModeSelector.style.display === 'none' ? 'flex' : 'none';
  });

  document.querySelectorAll('.video-mode-button').forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.dataset.mode;
      const backgroundVideo = document.getElementById('background-video');
      let videoSrc = '';
      switch (mode) {
        case 'party':
          videoSrc = 'party.mp4'; // URL of the party video
          break;
        case 'calm':
          videoSrc = 'calm.mp4'; // URL of the calm video
          break;
        case 'disco':
          videoSrc = 'disco.mp4'; // URL of the disco video
          break;
        case 'nature':
          videoSrc = 'nature.mp4'; // URL of the nature video
          break;
        case 'abstract':
          videoSrc = 'abstract.mp4'; // URL of the abstract video
          break;
      }
      backgroundVideo.src = videoSrc;
      backgroundVideo.style.display = 'block';
      backgroundVideo.play();
    });
  });

  const backgroundVideo = document.getElementById('background-video');
  backgroundVideo.addEventListener('dblclick', () => {
    backgroundVideo.style.display = 'none';
    backgroundVideo.pause();
  });

  // Menu toggle functionality
  document.getElementById('menu-toggle').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
  });

  document.getElementById('play-pause-button').addEventListener('click', togglePlayPause);
  document.getElementById('next-button').addEventListener('click', nextSong);
  document.getElementById('prev-button').addEventListener('click', prevSong);

  const searchIcon = document.getElementById('search-icon');
  const searchInput = document.getElementById('search-input');

  searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
    if (!searchInput.classList.contains('hidden')) {
      searchInput.focus();
    }
  });

  // Cerrar el campo de búsqueda al hacer clic fuera de él
  document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
      searchInput.classList.add('hidden');
    }
  });

  document.querySelectorAll('.nav-item a').forEach(item => {
    item.addEventListener('click', () => {
      const filter = item.dataset.filter;
      document.querySelectorAll('.filter-list').forEach(list => {
        list.classList.add('hidden');
      });
      document.getElementById(`${filter}-list`).classList.toggle('hidden');
      item.closest('li').classList.toggle('active');
    });
  });

  // Home button functionality
  document.getElementById('home-button').addEventListener('click', () => {
    loadSong(0, false); // Load the first song without playing it
  });

  const displayDetailList = (songs) => {
    const detailList = document.getElementById('detail-list');
    detailList.innerHTML = '';
    songs.forEach((song, index) => {
      const songItem = document.createElement('div');
      songItem.classList.add('song-item');
      songItem.dataset.index = index;
      songItem.innerHTML = `
        <img src="${song.cover}" alt="${song.nombre}">
        <div class="song-info">
          <p>${song.nombre}</p>
          <p>${song.artista}</p>
        </div>
        <div class="song-actions">
          <i class="fas fa-play play-button"></i>
          <i class="fas fa-ellipsis-v more-options"></i>
          <div class="more-options-menu">
            <a href="#" class="download-song">Download</a>
          </div>
        </div>
      `;
      songItem.querySelector('.play-button').addEventListener('click', (e) => {
        e.stopPropagation();
        handlePlayPauseClick(index, songItem);
      });
      songItem.querySelector('.more-options').addEventListener('click', (e) => {
        e.stopPropagation();
        const menu = songItem.querySelector('.more-options-menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      });
      songItem.querySelector('.download-song').addEventListener('click', (e) => {
        e.stopPropagation();
        downloadSong(song.url);
      });
      detailList.appendChild(songItem);
    });

    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('detail-section').classList.remove('hidden');
  };

  document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('main-section').classList.remove('hidden');
    document.getElementById('detail-section').classList.add('hidden');
  });
});
