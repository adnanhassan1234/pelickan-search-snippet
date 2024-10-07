FROM node:14.18.1 as build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
ENV REACT_APP_BASE_URL=https://api.stag.pelickandespatch.com:8443
ENV REACT_APP_API_KEY=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..5XhNx-
ENV REACT_APP_STRIPE_PUBLISHED_KEY=pk_test_51P6tBE047XoZUqWuUgTeTiEK3ombddExpArb9imgjib6DPhDuD34iKdlN9DMIpfdbHlGNMzuFoimkvWe1EtiT8nt00Ov2m2fRK
ENV REACT_APP_PAYPALL_CLIENT_ID=AS6kq3Hg8M7oHJLdEHWYEvpdE0EftNfANNk-eO9dC52BMeGjeG_3WWzbH84_v8fasr3SKSIn3AxUGOeK
ENV REACT_APP_CURRENCY_SYMBOL="£"
ENV REACT_APP_PAYPALL_CURRENCY="USD"
ENV REACT_APP_PAYMENT_DESCRIPTION="Booking Payment"
EXPOSE 3000
# CMD npm start
RUN npm run build
FROM nginx:1.21.4-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/n.c /etc/nginx/conf.d/default.conf
CMD [ "nginx","-g", "daemon off;"]