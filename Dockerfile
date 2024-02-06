ARG IMAGE
FROM $IMAGE
WORKDIR /src
COPY ./ ./
COPY URL_AWS_REPO.txt ./
COPY URL_AZURE_REPO.txt ./
CMD ["sh" "-c" "tail -f /dev/null"]