import { trackList } from './trackList.js'

const musicModule = (() => {

    function _createDiscography() {
        const music = document.createElement('section')
        music.id = 'track-list'
        

        const header = _createHeader('Music')


        music.appendChild(header)

        trackList.forEach(track => {
            const trackBlock = document.createElement('article')
            trackBlock.classList.add('track-container')
            
            const coverArt = _createCoverArt(track)
            const infoBar = _createInfoBar(track)
            // const audioPlayer = _createAudioPlayer(track)
            
            trackBlock.appendChild(coverArt)
            trackBlock.appendChild(infoBar)
            // trackBlock.appendChild(audioPlayer)

            music.appendChild(trackBlock)
        })

        const mediaPlayter = _createMediaPlayer(trackList)
        music.appendChild(mediaPlayter)
        

        return music
    }

        function _createHeader(headerText) {
            const blockHeader = document.createElement('h1')
            blockHeader.classList.add('header')
            blockHeader.textContent = headerText
            
            return blockHeader
        }

        function _createCoverArt(track) {
            const coverArt = document.createElement('img')
            coverArt.id = track.id
            coverArt.classList.add('audio-cover-art')
            coverArt.alt = track.name
            coverArt.src = track.src 
            coverArt.addEventListener('click', (e) => {
                _playTrack(e)
            })
            
            return coverArt
        }

            function _playTrack(e) {
                const activeImage = document.querySelector('.playing')
                const selectedTrack = document.querySelector(`img[id='${e.target.id}']`)
                const activeTrack = document.querySelector('.playback')
                const selectedAudio = document.querySelector(`audio[id='${e.target.id}']`)

                if (activeTrack !== null) {
                    activeTrack.pause()
                    activeTrack.classList.remove('playback')
                }

                if (activeImage !== null) {
                    activeImage.classList.remove('playing')
                }

                selectedAudio.currentTime = 0
                selectedAudio.play()
                selectedAudio.classList.add('playback')
                selectedTrack.classList.add('palying')
            }

        function _createInfoBar(track) {
            const infoBar = document.createElement('div')
            infoBar.classList.add('track-info-bar') 

            const playbackControls = _createPlaybackControls(track)
            // can the audio scrub bar fit in between these two? 
            // can we use a different look than the default bar?
            // const likesANDshares = _createLikesANDShares(track)
            
            infoBar.appendChild(playbackControls)
            // infoBar.appendChild(likesANDshares)
            
            return infoBar
        }

            function _createPlaybackControls(track) {
                const playbackControlsDiv = document.createElement('div')
                playbackControlsDiv.classList.add('playback-controls')

                const rewindButton = _createRewindButton(track)
                const playButton = _createPlayButton(track)
                const pauseButton = _createPauseButton(track)
                
                playbackControlsDiv.appendChild(rewindButton)
                playbackControlsDiv.appendChild(playButton)
                playbackControlsDiv.appendChild(pauseButton)
                
                return playbackControlsDiv
            }

                function _createRewindButton(track) {
                    const rewindButton = document.createElement('img')
                    rewindButton.src = "images/icon-rewind-button-24.png"
                    rewindButton.classList.add('info-bar-button', 'rewind-button')
                    rewindButton.id = track.id
                    rewindButton.addEventListener('click', (e)=> {
                        const selectedAudio = document.querySelector(`audio[id='${e.target.id}']`)
                        selectedAudio.currentTime = 0
                    })

                    return rewindButton
                }

                function _createPlayButton(track) {
                    const playButton = document.createElement('img')
                    playButton.src = "images/icon-play-button-24.png"
                    playButton.classList.add('info-bar-button', 'play-button')
                    playButton.id = track.id
                    playButton.addEventListener('click', (e) =>{
                        const activeAudio = document.querySelector('audio.active-audio')
                        const selectedAudio = document.querySelector(`audio[id='${e.target.id}']`)

                        if (activeAudio !== null) {
                            activeAudio.pause()
                            activeAudio.classList.remove('active-audio')
                        }

                        selectedAudio.play()
                        selectedAudio.classList.add('active-audio')
                    })

                    return playButton
                }

                function _createPauseButton(track) {
                    const pauseButton = document.createElement('img')
                    pauseButton.src = "images/icon-pause-button-24.png"
                    pauseButton.classList.add('info-bar-button', 'pause-button')
                    pauseButton.id = track.id
                    pauseButton.addEventListener('click', (e) =>{
                        const selectedAudio = document.querySelector(`audio[id='${e.target.id}']`)
                        selectedAudio.pause()
                    })

                    return pauseButton
                }

            function _createLikesANDShares(track) {
                const likesANDsharesDiv = document.createElement('div')
                likesANDsharesDiv.classList.add('likes-and-shares')

                // const likeButton = _createLikeButton(track)
                const shareButton = _createShareButton(track)


                // likesANDsharesDiv.appendChild(likeButton)
                likesANDsharesDiv.appendChild(shareButton)
                
                return likesANDsharesDiv
            }
            
                // function _createLikeButton(track) {
                //     const likeButton = document.createElement('img')
                //     likeButton.src = "images/icon-like-button-24.png"
                //     likeButton.classList.add('info-bar-button', 'like-button')
                //     likeButton.id = track.id
                //     likeButton.addEventListener('click', (e) =>{
                        
                //     })

                //     return likeButton
                // }

                function _createShareButton(track) {
                    const shareButton = document.createElement('img')
                    shareButton.src = "images/icon-share-button-24.png"
                    shareButton.classList.add('info-bar-button', 'share-button')
                    shareButton.id = track.id
                    shareButton.addEventListener('click', (e) =>{
                        if (navigator.share) {
                            navigator.share({
                                title: track.trackName,
                                url: `http://www.luthercalvinriggs.com#${track.id}`
                            })
                        } else {
                            alert('Sharing not supported on this broswer.')
                        }
                    })

                    return shareButton
                }

        function _createMediaPlayer(trackList) {
            const mediaPlayer = document.createElement('div')
            mediaPlayer.id = 'media-player'
            
            trackList.forEach(track => {
                const audio = document.createElement('audio')
                audio.id = track.id
                audio.preload = false

                const mp3 = _createMP3(track)
                const ogg = _createOGG(track)

                audio.appendChild(mp3)
                audio.appendChild(ogg)

                mediaPlayer.appendChild(audio)
            })

            return mediaPlayer
        }

            function _createMP3(track) {
                const mp3Source = document.createElement('source')
                mp3Source.src = track.mp3
                mp3Source.type = 'audio/mpeg'
                
                return mp3Source
            }
            
            function _createOGG(track) {
                const oggSource = document.createElement('source')
                oggSource.src = track.ogg
                oggSource.type = 'audio/ogg'
                
                return oggSource
            }

        

    function showDiscography() {
        const appContentBlock = document.querySelector('#app-content')
        appContentBlock.removeChild(appContentBlock.childNodes[0])
        
        // _updateBackgroundImage(appContentBlock)

        const discography = _createDiscography()
        appContentBlock.appendChild(discography)
    }
    
        function _updateBackgroundImage(appContentBlock) {
            appContentBlock.style.backgroundImage = "url('images/page-image-music.jpg')"
        }

    return {
        showDiscography
    }
})();


export { musicModule }