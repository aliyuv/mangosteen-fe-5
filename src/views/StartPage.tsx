import {defineComponent} from "vue";
import s from './StartPage.module.scss'
import {Button} from "../shared/Button";

export const StartPage = defineComponent({
  setup: (props,context) => {
    const h = () => {
      console.log('h');
    }
    return () => (
      <div class={s.button_wrapper}>
        <Button class={s.button} onClick={h}>测试</Button>
      </div>
    )
  }
})