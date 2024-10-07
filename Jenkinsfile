def NODE_RUNNING
pipeline {
  agent any
    environment {
        NODE_ENV = 'development'
        PROJECT= 'Vultture-Search-Snippet'
    }
  options {
    buildDiscarder(logRotator(
      numToKeepStr: '3',
      artifactNumToKeepStr: '3',
    ))
    durabilityHint('PERFORMANCE_OPTIMIZED')
  }
  stages {
    stage('Checkout Source') {
      steps {
        checkout scm
      }
    }
	stage("Build image") { 
		steps {
			script {
        app = docker.build("harbor.qmhtech.com/qmhdocker/vultturesnippet-test:${env.BUILD_ID}", "-f Dockerfile-test .")
			}
		}
	}
	stage("Push image") {
		steps {
			script {
					docker.withRegistry('https://harbor.qmhtech.com', 'qmhdocker-harbor-access') {
					app.push("latest")
				  app.push("${env.BUILD_ID}")
				}
			}
		}
	}
  stage('Deploy App') {
    steps {
          withKubeConfig([credentialsId: 'Kube-Secret' ]) {
    sh "kubectl apply -f deployment.yaml"
      }
      }
    } 
  stage('clean up') {
    steps {
      script {
        cleanWs()
      }
    }
  }
    stage('Info'){
      steps {
        sh '#!/bin/bash -e\n'+'echo "\n\nThis build is based on the source below:\n\n$(echo ${GIT_URL}|sed "s|.com/|&plugins/gitiles/|")/+/${GIT_COMMIT}\n\n"'
      }
    }
}
    post {
    always {
      script {
        if (NODE_RUNNING) {
          if (!Hudson.instance.slaves.find({it.name == NODE_RUNNING})){
            build job: currentBuild.projectName, propagate: false, quietPeriod: 60, wait: false
          }
        }
      }
    }
    success {
      gerritReview labels: [Verified: 1],
          message: "Build ${env.BUILD_NUMBER} of Job ${env.JOB_NAME} succeeded!\n${env.BUILD_URL}"
    }
    failure {
      script {
        if (NODE_RUNNING) {
          if (Hudson.instance.slaves.find({it.name == NODE_RUNNING})){
            gerritReview labels: [Verified: -1],
              message: "Build ${env.BUILD_NUMBER} of Job ${env.JOB_NAME} failed.\n${env.BUILD_URL}"
          }
        }
      }
    }
    unstable {
      script {
        if (NODE_RUNNING) {
          if (Hudson.instance.slaves.find({it.name == NODE_RUNNING})){
            gerritReview labels: [Verified: -1],
              message: "Build ${env.BUILD_NUMBER} of Job ${env.JOB_NAME} was unstable.\n${env.BUILD_URL}"
          }
        }
      }
    }
  }
}