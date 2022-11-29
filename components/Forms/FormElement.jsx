


function Select (props) {
    const {options, placeholder, value, ...rest} = props
    return (<>
    <select placeholder={placeholder} value={value}>
{options.map((el, index) => (<options key={index} value={el.value}>{el.label}</options>))}
    </select>
    </>)
}
function input (props) {
    const {placeholder,inputType, value, ...rest} = props;
    return (<>
    <input type={inputType} value={value}  />
    </>)
}


function renderFormElement (props) {
    const {tpye, elprops, ...rest} = props
    const formElementlist = {
        Select: Select,
        input: input
    }
    const _ = formElementlist[type];
    return <_ props={props}/>

};
export default renderFormElement;