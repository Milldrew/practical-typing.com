./build_docker.sh temp-test-container

docker run --rm temp-test-container ./run_tests.sh

docker rm image temp-test-container
