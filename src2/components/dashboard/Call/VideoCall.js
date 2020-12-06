import React from 'react'

export default function VideoCall() {
    return (
<div>
<div class="app-container" style={{width:" 100%",
    height: "75vh",
    margin: "0",
    padding: "0",
    overflow: "hidden"} }>

<div class="app-main">
  <div class="video-call-wrapper">
    <div class="video-participant">
      <div class="participant-actions">
        <button class="btn-mute"></button>
        <button class="btn-camera"></button>
      </div>
      <a href="#" class="name-tag">Andy Will</a>
      <img src="https://images.unsplash.com/photo-1566821582776-92b13ab46bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant"/>
    </div>
    <div class="video-participant">
      <div class="participant-actions">
        <button class="btn-mute"></button>
        <button class="btn-camera"></button>
      </div>
      <a href="#" class="name-tag">Emmy Lou</a>
      <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="participant"/>
    </div>
    <div class="video-participant">
      <div class="participant-actions">
        <button class="btn-mute"></button>
        <button class="btn-camera"></button>
      </div>
      <a href="#" class="name-tag">Tim Russel</a>
      <img src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="participant"/>
    </div>
    <div class="video-participant">
      <div class="participant-actions">
        <button class="btn-mute"></button>
        <button class="btn-camera"></button>
      </div>
      <a href="#" class="name-tag">Jessica Bell</a>
      <img src="https://images.unsplash.com/photo-1600207438283-a5de6d9df13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="participant"/>
    </div>
    <div class="video-participant">
      <div class="participant-actions">
        <button class="btn-mute"></button>
        <button class="btn-camera"></button>
      </div>
      <a href="#" class="name-tag">Ryan Patrick</a>
      <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="participant"/>
    </div>
    <div class="video-participant">
      <div class="participant-actions">
        <button class="btn-mute"></button>
        <button class="btn-camera"></button>
      </div>
      <a href="#" class="name-tag">Tina Cate</a>
      <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="participant"/>
    </div>
  </div>
  <div class="video-call-actions ">
    <button class="video-action-button mic"></button>
    <button class="video-action-button camera"></button>
    <button class="video-action-button maximize"></button>
    <button class="video-action-button endcall">Leave</button>
    <button class="video-action-button magnifier">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-in" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
      </svg>
      <span>100%</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-out">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    </button>
  </div>
</div>
</div>


</div>
    )
}
