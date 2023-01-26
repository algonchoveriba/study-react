import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

const About = (props) => {
  return (
    <div>
      <Header />
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>
      {props.isShow ? <h2>{props.doubleCount}</h2> : null}
      <hr />
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map(item => {
          return <div key={item}>{item}</div>;
        })}
      </ul>

      <Main page="about" />
      <Footer />
    </div>
  );
};

export default About;