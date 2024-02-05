ARG IMAGE
FROM $IMAGE
WORKDIR /src
COPY URL_AWS_REPO.txt ./
COPY URL_AWS_AZURE.txt ./
CMD ["sh" "-c" "tail -f /dev/null"]