const teamUiBox = (nameArray, imageUrl) => {

    return `
    <div class="member-box col-xs-6 col-sm-4 col-md-3">
    <div class="overflow-hidden position-relative width-100">
      <div class="position-relative">
        <div class="img-wrapper">
          <img src="${imageUrl}" alt="" />
        </div>
      </div>
      <!-- //.position-relative -->
      <div class="bg-gray-light no-padding-rl padding-6 position-relative text-center">
        <span
          class="display-block font-family-alt font-weight-700 letter-spacing-2 text-gray-dark-2 text-small text-uppercase">
          ${nameArray[0]}<br />${nameArray[1]}
        </span>
      </div>
      <!-- //.bg-gray-light -->
    </div>
    <!-- //.overflow-hidden -->
  </div>

    `
}

export async function getTeamMembers(team) {
    try {
        const response = await fetch(`/data/teams.json`)
        const data = await response.json()
        return data[team]
    } catch (error) {
        console.error(error);
    }
}

export function generateUI(teamMembers){
    let htmlElement = " "
    for(const member of teamMembers){
        htmlElement += teamUiBox(member.name.split(" "), member.imageurl);
    }
    return htmlElement
}
