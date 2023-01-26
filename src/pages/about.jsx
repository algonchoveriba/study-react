import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export default function About({
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) {

  return (
    <div>
      <Header />

      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      {isShow ? <h2>{doubleCount}</h2> : null}
      <hr /> 
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return <div key={item}>{item}</div>;
        })}
      </ul>

      <Main page="about" />
    </div>
  );
}
