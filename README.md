# Link in Bio

## Description
This project is a simple link in bio page. It is a single page application that uses vitejs and reactjs. It is a static site that takes the necesary data from environment variables.


The enviroment variables are defined in the .env file. The .env file is not included in the repository, so you have to create it.


- `.env` file example:
```bash
VITE_GITHUB_LINK=https://github.com/fcavazzoli
VITE_NAME=Federico Cavazzoli
VITE_PROFILE_PIC=https://github.com/fcavazzoli.png
```
It is necesary to define `VITE_NAME`, `VITE_PROFILE_PIC` and at least one link ie: `VITE_GITHUB_LINK`.

## Run

```bash
npm install
npm run dev
```

## Notes

This project is based on Cassidoo link-in-bio repo. You can find it here: [Cassidoo Repo](https://github.com/cassidoo/link-in-bio-template)