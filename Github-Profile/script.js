const searchBtn = async () => {
  const username = document.getElementById("searchInput").value;

  const response = await fetch(`https://api.github.com/users/${username}`);

  const detailsContainer = document.querySelector(".details");

  const data = await response.json();

  if (response.ok) {
    detailsContainer.style.display = "flex";
    document.getElementById("result").innerHTML = `
        <div class="profile">
            <div class="profile-image">
                <img src="${data.avatar_url}"/>
            </div>
            <div class="profile-details">
                <h2 class="name">${data.name || data.login}</h2>
                <p class="username">@${data.login}</p>
                <p class="bio">${
                  data.bio || "Hesapta bio bilgisi tanımlanmamış!"
                }</p>
                <div class="stats">
                    <div>
                        <div class="stats-name">Public Repo Sayısı</div>
                        <div class="stats-value">${data.public_repos}</div>
                    </div>
                    <div>
                        <div class="stats-name">Takipçi Sayısı</div>
                        <div class="stats-value">${data.followers}</div>
                    </div>
                    <div>
                        <div class="stats-name">Takip Edilen Sayısı</div>
                        <div class="stats-value">${data.following}</div>
                    </div>
                </div>
                <div class="media">
                    <p>
                        <span class=""media-value>
                            ${data.location || "Bilgi tanımlanmamış"}
                        </span>
                    </p>
                    <p>
                        <span class=""media-value>
                            ${data.blog || "Bilgi tanımlanmamış"}
                        </span>
                    </p>
                    <p>
                        <span class=""media-value>
                            ${data.twitter_username || "Bilgi tanımlanmamış"}
                        </span>
                    </p>
                    <p>
                        <span class=""media-value>
                            ${data.company || "Bilgi tanımlanmamış"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        `;
  } else {
    alert(data.message);
  }
};
