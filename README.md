# Sentiment Analysis Frontend

## Table of contents
- [About](#about)
    - [Key features](#key-features)
    - [Backend](#backend)
    - [Data](#data)
- [Getting started](#getting-started)
     - [Dependencies](#dependencies)
     - [Dev setup step-by-step](#dev-setup-step-by-step)


## About

This project is an exercise in developing and deploying a mobile-friendly Sentiment Analysis frontend. It was created as part of the Cloud Computing course at Lapland University of Applied Sciences. The project utilizes Vite as the build tool and is deployed on Render.com for hosting. You can find it running live on https://sentiment-analysis-frontend-o7e4.onrender.com/

With this exercise we practised:
- Frontend development with Vite
- Backend integration using API
- Deployment of frontend (Render) and backend (CSC OpenShift)
- Working with sentiment analysis models
- Handling and processing CSV datasets
- Version control with Git and GitHub

### Key Features
- **User Input**: Users can type a sentence into a text box, and the app will predict its sentiment.
- **Real-Time Feedback**: The app dynamically displays the predicted sentiment along with an appropriate color-coded message.
- **Mobile-Friendly**: The application is designed to be responsive and user-friendly on mobile devices.

### Backend

The application uses a dedicated backend for processing sentiment analysis. The backend project was also developed as part of the Cloud Computing course at Lapland University of Applied Sciences. It is built using Python 3.9 to ensure compatibility with CSC OpenShift, which is used for deployment. You can find more details about the backend project here: https://github.com/Iinaus/sentiment_analysis_backend. The backend server is running until 31.08.2025.

### Data

The model is trained using a CSV dataset (train.csv) that contains labeled text data. The dataset consists of text samples labeled with sentiments (positive, negative, neutral). The dataset used in this project is based on the [Sentiment Analysis Dataset](https://www.kaggle.com/datasets/abhi8923shriv/sentiment-analysis-dataset) from Kaggle, which is a collection of tweets and their sentiment labels. You can find more details and download the dataset from the provided link.

## Getting started

Follow the instructions below to set up the project and run the app locally.

### Dependencies

This project relies on the following dependencies:

- to be updated

### Dev setup step-by-step

To run the project locally:

1. Clone the project
2. Install the required dependencies with the following command
 `npm install`
3. Run in the development mode
`npm run dev`
