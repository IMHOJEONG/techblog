https://www.chromatic.com/blog/component-driven-development/

- 위 내용을 정리한 부분 

- modularization은 결합과 결속이라는 개념을 배우기 훨씬 전부터 SW 엔지니어링의 핵심 원칙 중 하나 

## CDD? Component-Driven Development? 

- Component를 중심으로 빌드 프로세스를 고정하는 개발 방법론 

- Component에서 시작하여 page 또는 화면 수준에서 끝나는 "상향식"에서 UI를 빌드하는 프로세스 

### 장점 

- 고정된 일련의 상태에서 한 번에 하나의 component를 작업하는 것이 중요한가? 

`1. 개발에 집중` : 전체 앱을 특정 상태로 조작하여 단일 component에서 작업하는 것은 고통스럽고 힘듬 

  - 특정 상태는 개발의 전체 앱 컨텍스트 내에서 달성하기 어렵거나 불가능할 수 있음 

    - 특정 로드 또는 오류 상태를 생각해보면 됨 

`2. UI 적용 범위 증가` : 모든 관련 상태를 열거한다는 것은 누락된 것이 없고, component가 가능한 모든 시나리오에서 작동한다는 것을 확신할 수 있음을 의미 

`3. Target Feedback` : 동료가 새 component나 변경된 component를 검토할 때 탐색기에서 찾아보는 것이 훨씬 더 쉬움 

  - 한 번에 하나의 component에 집중하면 communication(특히 디자인과 개발 간의)이 훨씬 더 정확하게 이루어질 수 있음 

`4. component lib 구축` : 앱과 조직 내에서 component 재사용을 강화

`5. 병렬 개발`: 한 번에 하나의 component를 작업하면 "화면" 수준에서는 불가능한 방식으로 다른 팀 구성원 간에 작업을 공유할 수 있음 

`6. 시각적인 테스트`: component explorer는 자동화된 테스트를 거부하는 경우가 많았던 영역(UI)에서 기존의 자동화된 테스트와 유사한 "시각적" 테스트 클래스를 허용 

  - 특히 TDD와 동일한 이점을 가지지만 UI 영역에서 "Visual TDD"의 헝태를 허용 

### UI Component Explorers 

- CDD를 하기 위한 도구들의 모음 

- https://www.chromatic.com/blog/ui-component-explorers---your-new-favorite-tool/?ref=chromaticblog.ghost.io

- chromatic : storybook 테스트 툴? 
