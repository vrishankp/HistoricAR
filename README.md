# HistoricAR

Have you ever been to a historic location and not known anything about it? Now you can learn more just by pointing your device at the location with the help of HistoricAR!

HistoricAR is an augmented reality (AR) web platform designed to enhance the experience of visiting historical sites. Users can scan a QR code at a historical location to access an AR experience, which includes immersive visuals and audio that dynamically adapts to the user’s view of the target image.

Our goal is to make history more engaging and accessible by providing an interactive way to learn about historical sites through modern technology.

This project was created by PBS Wisconsin Team 2 - HistoricAR for CS 620 (CS Capstone) at UW-Madison.

## Link to the Repository
https://github.com/vrishankp/HistoricAR

## Features

- Augmented Reality Experience
- Voiceover to explain more about the location
- Video that plays over the historical site to help you learn about it 
- Playing and pausing the audio or video
- Audio that fades in and out 
- Face tracking and filters
- Ability to flip cameras

## Technologies/Frameworks used

- MindAR (built on 3js for AR development)
- React for the landing page 

## Installation 

1. Clone the repository
```
git clone https://github.com/your-repo-name/HistoricAR.git
cd HistoricAR
```

2. Install dependencies
```
npm install
```

3. Run the React app 
```
npm start
```  
This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. Click Ctrl+C on your keyboard to end the live server.

## Relevant files

Our final, integrated, working version is in the final_demo directory. The important files are:
- finalDemo.mind: Store the target images onto which 3D models are overlayed on.
- .gltf/.glb files: These files contain the 3D models which can be used. Any new 3D model that needs to be added should be added in this file format. 
- index.html: Contains the main code for the AR functionality, and within this file is a script tag containing the javascript for the video and audio logic.
- All other HTML files in this folder have isolated versions of the features present in index.html.
- The index.html in the root directory contains the face-tracking feature.

If you need to add a new target image, create a new .mind file by using this Image Targets Compiler tool provided by MindAR: https://hiukim.github.io/mind-ar-js-doc/tools/compile/, adding the images in the desired order. In index.html, make sure the new 3D model is attached to the corresponding index. The index of the image in the .mind file should correspond to the index on index.html.

### Notes for developers:
- In the ```<a-scene>``` tag, here are some attributes nested within the ```mindar-image``` attribute that are useful to note:
    - ```imageTargetSrc```: specify your .mind file here
    - ```filterMinCF```: a numerical value that affects sensitivity of the AR objects overlaid on top of tracked images. Higher values correspond to higher sensitivity and introduces more "shakiness".
    - ```filterBeta```: a numerical sensitivity value similar to ```filterMinCF```. Lower values of this increases tracking accuracy and less shaky AR objects, but also introduces a reaction delay in positioning/rotation when the target image moves around.
    - ```maxTrack```: specifies the number of target images that can be tracked simultaneously on screen. The default value is 1.
- To make objects interactable, they must have a ```class='clickable'``` attribute. In the Javascript, you can then add an event listener on the object to react to a click.
    ```html
    <a-video id="vid-obj" src="#lighthouse-mov" class="clickable" autoplay="false" rotation="0 0 0" width="1" height="0.5625" scale="2 2 2" position="0 0 0"></a-video>
    ```
- Videos can be confusing to use. To add a flat video as an AR object attached to a tracking image, do the following:
    1. Declare the video as an asset using the ```<video>``` tag, giving it an id and source file:
        ```html
        <video id="lighthouse-mov" src="lighthouseVid.mp4"></video>
        ```
    2. Within ```<a-scene>```, declare an entity as usual, and add an ```<a-video>``` element (with an id) that uses the asset defined in the previous step:
        ```html
        <!-- Lighthouse Video, at index 0 in finalDemo.mind -->
        <a-entity mindar-image-target="targetIndex: 0" id="target0">
            <a-video id="vid-obj" src="#lighthouse-mov" class="clickable" autoplay="false" rotation="0 0 0" width="1" height="0.5625" scale="2 2 2" position="0 0 0"></a-video>
        </a-entity>
        ```
    3. In the Javascript, in order to play, pause, or change the volume of the video, you must refer to the video asset itself (the ```<video>``` tag), not the ```<a-video>``` element:
        ```javascript
        const lighthouseVid = document.querySelector("#lighthouse-mov"); // id of the <video> tag
        lighthouse2Target.addEventListener("targetFound", () => { lighthouseVid.play(); });
        ```
        To react to a click on the video, you must refer to the ```<a-video>``` element instead of the video asset:
        ```javascript
        // toggle between play and pause for the video
        const lighthouseVid = document.querySelector("#lighthouse-mov"); // id of the <video> tag
        const vidObj = document.querySelector('#vid-obj'); // id of the <a-video> tag
        vidObj.addEventListener("click", e => {
          if (vidPlaying) { lighthouseVid.pause(); } 
          else { lighthouseVid.play(); }
          vidPlaying = !vidPlaying;
        })
        ```
- Further tutorials on using MindAR is available on its website: https://hiukim.github.io/mind-ar-js-doc/.

## How to use HistoricAR

1. Visit a supported historic site
2. Scan the QR code at the site
3. Point your camera at the location 
4. Enjoy the Augment Reality Experience

### Sample Images
Here are some sample images that you can test out yourself using our existing index.html in the final_demo folder. Simply launch HistoricAR and point the camera at the image to trigger the experience.

1. Video with click to play/pause:

    <img src="https://github.com/vrishankp/HistoricAR/blob/main/final_demo/Index0Lighthouse.png?raw=true" alt="index0lighthouse" width="80%"/>
    <br/><br/>

2. 3D model with narrative voiceover:

    <img src="https://github.com/vrishankp/HistoricAR/blob/main/final_demo/Index1Lighthouse.jpeg?raw=true" alt="index1lighthouse" width="80%"/>
    <br/><br/>

3. 3D clickable model with info blurb:

    <img src="https://github.com/vrishankp/HistoricAR/blob/main/final_demo/Index2Owlin.jpg?raw=true" alt="owlinImage" width="80%"/>

## Future Plans 

1. Add support for more locations
2. Incorporate spatial audio for more immersion
3. Model optimization and compression to be able to host multiple high-quality models on the screen simultaneously
4. Accessibility options (e.g. closed captions)
5. Animated models (e.g. scenery and characters) for more entertainment and engagement

## Contributors

- Ankit Mohapatra
- Bahulya Tandon 
- Mulan Liu
- Vrishank Paladugu

