import styled from 'styled-components'

const ItemRow = styled.div`
  position: relative;
  box-sizing: border-box;

  &.complete {
    color: grey;
    text-decoration: line-through;
  }
`

export default ({title, active}) => (
  <ItemRow>
    <input
      type="checkbox"
      checked={active}
      onClick={(el) => el.target.offsetParent.classList.toggle('complete')}
    />
    <span>{title}</span>
  </ItemRow>
)
