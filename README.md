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
This Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. Click Ctrl+C on your keyboard to end the live server

## Relevant files

Our final, integrated, working version is in the final_demo directory. The important files are:
- finalDemo.mind: Store the target images onto which 3D models are overlayed on.
- .gltf/.glb files: These files contain the 3D models which can be used. Any new 3D model that needs to be added should be added in this file format. 
- index.html: Contains the main code for the AR functionality, and within this file is a script tag containing the javascript for the video and audio logic.
- All other HTML files in this folder have isolated versions of the features present in index.html.

If you need to add a new target image, create a new .mind file by using this Image Targets Compiler tool provided by MindAR: https://hiukim.github.io/mind-ar-js-doc/tools/compile/, adding the images in the desired order. In index.html, make sure the new 3D model is attached to the corresponding index. The index of the image in the .mind file should correspond to the index on index.html.

## How to use HistoricAR

1. Visit a supported historic site
2. Scan the QR code at the site
3. Point your camera at the location 
4. Enjoy the Augment Reality Experience

## Future Plans 

1. Add support for more locations
2. Incorporate spatial audio 
3. Model optimization and compression
4. Accessibility (e.g. closed captions)
5. Animated models (e.g. scenery and characters)

## Contributors

- Ankit Mohapatra
- Bahulya Tandon 
- Mulan Liu
- Vrishank Paladugu

