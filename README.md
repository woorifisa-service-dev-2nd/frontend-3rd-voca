# VOCA

![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=VOCA%20&fontSize=90)

# 1️⃣ 주제 및 팀(팀원) 소개

## 주제
단어나 문장을 직접 등록하여 암기 하는 것을 도와주는 단어장 <br>

## 활용기술
`HTML`, `CSS`, `JS(Node.js 기반 서버 구축)`, `radix-ui` 라이브러리, `routing`
<br><br>

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
 : ****

## 1. 



## 2. 




# 4️⃣ 핵심 기능 설명 및 구현 방법

1. `Routers tag` 내부에 `<Router>`를 통해 URL과 Page를 Mapping.
```javascript
   <DataContextProvider >
    <Routes>
      <Route path="/" element={<NavigatorLayout />}>
        <Route index element={<Home />} />
        <Route path="/myWords" element={<MyWords />} />
      </Route>
    </Routes>
  </DataContextProvider>
    
```
   
2. useReducer로 상태업데이트 로직분리. 
```javascript
   const reducer =  (state, action) => {

  switch(action.type){
    case 'actionA':
      return "state is A";
    case 'actionB':
      return "state is B";
    
  } 
}
```
   
3. 


4. 

5. 

6. 

<br><br>

# 4️⃣ 트러블 슈팅
## 💣 


## 💣 radix 라이브러리 활용
 radix-ui 라이브러리 활용할 때 기술문서를 읽고 적용하는데 어려움이 있었음. 활용법을 숙지하는게 중요함을 느낌.

##  💣 



        
<br><br>

# 5️⃣ 회고(느낀점)

* 박은혜
  > 

* 용은희
  > radix 라이브러리를 써볼수 있는 기회가 되어 좋았다.
  
* 이건중
  
  > 
