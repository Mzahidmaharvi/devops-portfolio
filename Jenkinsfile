pipeline {
    agent any
    stages {
        stage('Checkout') { steps { checkout scm } }
        stage('Docker Build') { steps { sh 'docker build -t zahid-portfolio:${BUILD_NUMBER}.' } }
        stage('Deploy to S3') {
            steps {
                withAWS(credentials: 'aws-creds', region: 'us-east-1') {
                    sh 'aws s3 sync. s3://zahid-portfolio --exclude ".git/*" --exclude "terraform/*"'
                }
            }
        }
    }
}