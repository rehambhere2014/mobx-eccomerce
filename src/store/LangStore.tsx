import { makeObservable, observable } from "mobx"

type langsProps ={
  code:string,
  name:string,
  dir:string,
  countryCode:string
}
class LangStore {
langs:langsProps[]=[
  {
    code:'en',
    name:'English',
    dir:'ltr',
    countryCode:'gb'
  },{
    code:'ar',
    name:'العربية',
    dir:'rtl',
    countryCode:'sa'
  }
]
  constructor(){
makeObservable(this, {
  langs:observable
})
  }
}

export default LangStore