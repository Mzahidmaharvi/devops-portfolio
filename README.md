## Code se chalane ka tareeqa

Pehle Docker Desktop, Git aur Python install hona chahiye.

```bash
git clone https://github.com/Mzahidmaharvi/devops-portfolio.git
cd devops-portfolio
pip install "dvc[s3]"
dvc pull
docker compose up --build
```

Browser mein kholein: http://localhost:8080

`dvc pull` bari files (jaise `assets/demo.png`) DagsHub se download karta hai.