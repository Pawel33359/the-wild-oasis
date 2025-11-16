import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;


// function Filter({filterField, options}) {
//   return (
//     // <FilterContext.Provider>
//     <StyledFilter>
//       </StyledFilter>
//     // </FilterContext.Provider>
//   )
// }

// const FilterContext = createContext();
// function Filter({children, filterField}) {
//   return (
//     <FilterContext.Provider value={{filterField}}>
//       <StyledFilter>
//         {children}
//       </StyledFilter>
//     </FilterContext.Provider>
//   )
// }

// function Button({children, param}){
//   const {filterField} = useContext(FilterContext);
//   const [searchParams, setSearchParams] = useSearchParams();

//   function handleClick(value){
//     searchParams.set(filterField, value);
//     setSearchParams(searchParams);
//   }

//   const currentFilterValue = searchParams.get(filterField);

//   return <FilterButton active={currentFilterValue === param} onClick={()=>handleClick(param)}>{children}</FilterButton>
// }

// Filter.Button = Button;

// export default Filter


function Filter({options, filterField}) {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentFilterValue = searchParams.get(filterField);

    
    function handleClick(value){
      searchParams.set(filterField, value);
      setSearchParams(searchParams);
    }

    return (
              <StyledFilter>
        {options.map(option=><FilterButton active={currentFilterValue === option.value} onClick={()=>handleClick(option.value)} key={option.value}>{option.label}</FilterButton>)}
      </StyledFilter>
    )
}

export default Filter