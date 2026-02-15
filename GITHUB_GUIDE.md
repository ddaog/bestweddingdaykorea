# 초보자를 위한 GitHub 업로드 가이드

Git이 처음이신가요? 걱정하지 마세요!
아래 단계를 천천히 따라 하시면 로컬에 저장된 프로젝트를 GitHub에 안전하게 올리실 수 있습니다.

## 1단계: GitHub에서 저장소(Repository) 만들기

1.  [GitHub](https://github.com/)에 로그인합니다.
2.  우측 상단의 **+** 아이콘을 누르고 **New repository**를 클릭합니다.
3.  **Repository name**에 `bestweddingday`라고 입력합니다.
4.  **Public** (공개) 또는 **Private** (비공개) 중 원하는 것을 선택합니다.
5.  **Initialize this repository with:** 항목들은 **아무것도 체크하지 마세요** (이미 로컬에 파일이 있으니까요).
6.  하단의 **Create repository** 버튼을 클릭합니다.

## 2단계: 내 컴퓨터와 GitHub 연결하기

저장소를 만들면 화면에 여러 명령어가 나옵니다. 그 중 **"…or push an existing repository from the command line"** 부분에 있는 명령어를 사용할 것입니다.

터미널(이 프로그램의 입력창)에 다음 명령어들을 **한 줄씩 복사해서 입력(엔터)** 하세요.

### (1) 주소 연결하기
*(이미 제가 연결해 두었습니다! 이 단계는 건너뛰셔도 됩니다)*

```bash
git remote add origin https://github.com/ddaog/bestweddingdaykorea.git
```

### (2) 업로드 하기 (Push)
*이제 아래 명령어를 터미널에 입력하시면 됩니다.*

```bash
git push -u origin main
```

---

## 💡 자주 발생하는 문제 (Troubleshooting)

### Q. 로그인 하라고 떠요!
터미널에서 `git push`를 하면 Username과 Password를 물어볼 수 있습니다.
- **Username**: 깃헙 아이디 입력
- **Password**: 깃헙 비밀번호 대신 **Token**을 써야 할 수도 있습니다. 
    - 요즘은 웹 브라우저가 뜨면서 로그인 창이 나오기도 합니다. 로그인해주시면 됩니다.

### Q. "fatal: remote origin already exists" 라고 떠요!
이미 연결된 주소가 있다는 뜻입니다. 기존 연결을 지우고 다시 연결하려면:
```bash
git remote remove origin
```
한 뒤에 다시 2단계-(1)부터 하시면 됩니다.

### Q. 이메일/이름 설정을 안 했대요!
`Run` 버튼 터미널에 아래 명령어로 본인 정보를 등록해주세요.
```bash
git config --global user.name "본인영문이름"
git config --global user.email "본인이메일@example.com"
```
