// LOADING SCREEN


window.addEventListener('load', function() {
  const loadingScreen = document.querySelector(".loadingScreen")
  const app = document.querySelector("#app")

  loadingScreen.animate([
    {
      opacity: 1,
    },
  
    {
      opacity: 0,
    }
  ], {
    duration: 2000,
    fill: "forwards",
    easing: "ease-in"
  })

  setTimeout(handle => {
    app.animate([
      {
        opacity: 0,
      },
    
      {
        opacity: 1,
      }
    ], {
      duration: 2000,
      fill: "forwards",
      easing: "ease-in",
      delay: 500
    })
  }, 1000)

  setTimeout(handle => {
    loadingScreen.remove();
  }, 2000)
})

// GET LATEST PFP

const pfpAPIUrl = "https://avatar-cyan.vercel.app/api/"

// NOTE: userId parameter MUST be a string.
async function getDiscordUserData(userId) {
  const fullUrl = pfpAPIUrl.concat(userId)

  const result = await fetch(fullUrl)

  return result.json()
}

const myUserId = "1221457893522669662"

getDiscordUserData(myUserId).then(userData => {
  const pfpResult = String(userData.avatarUrl)

  const pfpElement = document.querySelector(".pfp")

  pfpElement.src = pfpResult
})