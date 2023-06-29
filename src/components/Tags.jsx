import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:10px;
  margin-top:20px;
  a {
    padding:10px;
    border-radius: 6px;
    background:${({theme})=>theme.secondary};
    color:${({theme})=>theme.text};
    font-size:14px;
    cursor: pointer;
  }
`
const Tags = () => {
  return <Tag>
        <Link to="/">전체</Link>
        <Link to="/tags?tags=음악">음악</Link>
        <Link to="/tags?tags=뉴스">뉴스</Link>
        <Link to="/tags?tags=실시간">실시간</Link>
        <Link to="/tags?tags=요리">요리</Link>
        <Link to="/tags?tags=최신">최근에 업로드된 영상</Link>
    </Tag>
}

export default Tags