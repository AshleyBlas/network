
document.addEventListener('DOMContentLoaded', async() => {
    const feedDiv = document.querySelector('#profile-container');
    feedDiv.innerHTML = '';
    const response = await fetch(`/api/profile/${username}`);
    
    const data = await response.json()
    
    const {user,bio,profile_picture,posts,followers,following} = data;

    const profile = `
    
    <div class=" h-100">
    <div class=" d-flex h-100">
        <div class="col col-lg-12 col-xl-12 h-100">
            <div class="card rounded-0 h-100">
                <div class=" text-white d-flex flex-row" style="background-color: #000; height:200px;">
                    <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
                        <img src="${profile_picture}" alt="${user}'s profile picture" class="img-fluid img-thumbnail mt-4 mb-2" style="width: 150px; z-index: 1">
                        
                        
                    </div>
                    <div class="ms-3" style="margin-top: 130px;">
                        <p>@${user}</p>
                    </div>
                </div>
                <div class="p-4 text-black bg-body-tertiary">
                    <div class="d-flex justify-content-end text-center align-items-center py-1 text-body">
                        <div id="follow-button-container">
                            
                        </div>
                        <div class="px-3">
                            <p class="mb-1 h5">${posts}</p>
                            <p class="small text-muted mb-0">Posts</p>
                        </div>
                        <div class="px-3">
                            <p class="mb-1 h5">${followers}</p>
                            <p class="small text-muted mb-0">Followers</p>
                        </div>
                        <div>
                            <p class="mb-1 h5">${following}</p>
                            <p class="small text-muted mb-0">Following</p>
                        </div>
                    </div>
                </div>
                <div class="card-body p-4 text-black h-100">
                    <div class="mb-5  text-body">
                        <p class="lead fw-normal mb-1">About</p>
                        <div class="p-4 bg-body-tertiary">
                            <p class="font-italic mb-1">${bio}</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-4 text-body">
                        <p class="lead fw-normal mb-0">Recent posts</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        
    </div>
</div>
    `;

    feedDiv.innerHTML = profile;
    
});