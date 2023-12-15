

![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=My%20VOCA%20&fontSize=90)

# 1️⃣ 주제 및 팀(팀원) 소개

## 주제
직접 만들어나가는 영어 단어장 프로젝트 <br><br>


## 팀원
박은혜, 용은희 , 이건중


# 2️⃣ 협업 방식

✅ 협업툴 : 슬랙

✅ 초기 폴더구조를 정한 후 깃허브 push

✅ 이후, 각자 기능구현 ( 메인, 라우팅, 모달 )

✅ 구현하는 과정에서 의견을 공유함

✅ 기능구현 완료 후 git merge.

<br><br>

# 3️⃣ 활용기술

## 1. 개발 환경
`React`, `HTML`, `CSS`, `JS(Node.js 기반 서버 구축)` <br>




## 2. 사용 라이브러리
- `radix-ui`: 다양한 컴포넌트를 제공 -> 높은 재사용성
- `React-router-dom`:  페이지 간의 라우팅을 구현


<br><br>
# 4️⃣ 핵심 기능 설명 및 구현 방법

### 1. 페이지 라우팅
- `Routers tag` 내부에 `<Router>`를 통해 URL과 Page를 Mapping.
- `<Link>` 컴포넌트에 이동할 경로 작성
```javascript
   <DataContextProvider >
    <Routes>
      <Route path="/" element={<NavigatorLayout />}>
        <Route index element={<Home />} />
        <Route path="/myWords" element={<MyWords />} />
      </Route>
    </Routes>
  </DataContextProvider>

  <Link to="/myWords">이동하기</Link>
    
```
### 2. 단어 리스트
- 단어 데이터는 Context API를 사용 -> props로 계속해서 전달하지 않고 데이터 공유
```javascript
  const WordList = () => {
    const data = useWords();

    return (
        <>
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 500 }}>
                <Grid columns="2" gap="5">
                    {data.map((word) => (
                        <WordItem key={word.id} word={word}></WordItem>
                    ))}
                </Grid>
            </ScrollArea>
        </>
    )
}
```
   
### 3. 단어 추가
- 단어 추가 폼에 내용을 입력하면 리스트에 추가 
- 단어 Form 을 정의해두고 재사용
```javascript
   const AddForm = () => {

    const buttons = [
        { label: 'ADD', onClick: onAdd },
    ];

    return (
        <WordForm
            title="New Word"
            buttons={buttons}
        />
    );
}
```

### 4. 단어 수정
- 리스트 화면에서 북마크 체크 및 해제 가능
- 디테일 모달에서 직접 수정하거나 삭제 가능
- 단어 Form 을 정의해두고 재사용
```javascript
   const EditForm = ({ sourceWord }) => {
  
      const buttons = [
          { label: 'UPDATE', onClick: onUpdate },
          { label: 'DELETE', onClick: onDelete },
      ];

      return (
          <WordForm
              title={sourceWord.eng}
              sourceWord={sourceWord}
              buttons={buttons}
          />
      );
```
<br><br>

# 4️⃣ 트러블 슈팅

## 💣 컴포넌트 재사용의 어려움
기능 구현 후에 어떤 컴포넌트를 공통으로 처리하면 좋을지 고민하는데 시간이 오래걸렸음.


## 💣 radix 라이브러리 활용
 radix-ui 라이브러리의 컴포넌트를 커스텀을 해야하는 요구사항이 있었는데 기술문서를 읽고 적용하는데 어려움이 있었음. 활용법을 숙지하는게 중요함을 느낌.

## 

        
<br><br>

# 5️⃣ 회고(느낀점)

* 박은혜
  > 공통 컴포넌트를 설계하고 컴포넌트 간의 상태 및 로직을 분리하여 재사용성을 높이는 과정에서 장점을 확인할 수 있었다. 공통 컴포넌트를 잘 설계할수록 개발 생산성도 높아질 수 있음을 배웠다.

* 용은희
  > radix 라이브러리를 써볼 수 있는 기회가 되어 좋았고 컴포넌트 재사용에 대해 복습할 수 있어서 좋았다.
  
* 이건중
  
  > 
