import "./Describe.css"
import React from 'react'; // これを追加
function Describe(){
    return(
        <React.Fragment>
         <p> 趣味: アコースティックギターを弾くこと</p>
         <p>好きな食べ物: 肉全般（焼肉、ステーキetc）</p>
        <h3>今後の目標</h3>
        <span>就活に向けて、ポートフォリオを作成し、企業にアピールできるようになりたい</span>
        </React.Fragment>
    )
}
export default Describe