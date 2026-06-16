FROM node:26 as builder

ARG SRC

COPY $SRC /opt/app
WORKDIR /opt/app

RUN npm install


FROM node:26-slim as runner

COPY --from=builder /opt/app /opt/app

WORKDIR /opt/app

ENV NEXT_PUBLIC_API_BASE_URI="http://localhost:8080"

CMD ["sh", "-c", "npm run build && npm run start"]
