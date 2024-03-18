function generateSpeakerCardHtml(speaker) {
    return `
    
    <div class="features-box speaker-box col-sm-6 col-md-4">
          <div class="overflow-hidden position-relative width-100">
            <div class="img-wrapper">
              <img src="${speaker.imageUrl}" alt="" />
            </div>
            <!-- //.img-wrapper -->

            <div class="bg-black no-padding-rl padding-6 position-relative text-center">
              <span
                class="display-block font-family-alt font-weight-700 letter-spacing-2 text-white text-medium text-uppercase">
                ${speaker.name}
              </span>
            </div>
            <!-- //.bg-black -->

            <div class="ease height-100 padding-2 position-absolute position-top position-left show-on-hover width-100">
              <div class="bg-base-color height-100 width-100">
                <div class="display-table height-100 width-100">
                  <div
                    class="display-table-cell no-padding-tb padding-11 vertical-align-middle text-uppercase text-white">
                    <span class="display-block font-family-alt letter-spacing-1 title-small">
                      ${speaker.topic}
                    </span>
                    <br />
                    <span class="display-block font-weight-700 letter-spacing-1 text-medium">
                      ${speaker.occupation}
                    </span>
                  </div>
                  <!-- //.display-table-cell -->
                </div>
                <!-- //.display-table -->
              </div>
              <!-- //.bg-base-color -->
            </div>
            <!-- //.ease -->
          </div>
          <!-- //.overflow-hidden -->
        </div>
    
    `
}

async function getSpeakersInformation() {
    try {
        const response = await fetch("/data/speakers.json")
        const data = await response.json()
        populateSpeakerSection(data, document.querySelector(".speaker-box-container"))
    } catch (error) {
        console.log(error);
    }
}


function populateSpeakerSection(data, targetElement) {
    let htmlString = ""
    for (const speaker of data) {
        htmlString += generateSpeakerCardHtml(speaker)
    }
    targetElement.insertAdjacentHTML("beforeend", htmlString)
}

getSpeakersInformation()