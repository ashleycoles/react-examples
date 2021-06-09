import React from 'react'

// Funtional components are simpler than class based components,
// less boilerplate code is required


// Because the ChildExample needs access to data given to it via props,
// we must pass in props as a paramater
// And because this is not a class, we do not need to use this when
// refering to the props so just prop.propname will do the trick
const ChildExample = (props) => <a href={props.link}>{props.text}</a>


// The ParentExample passes data down to the ChildExample as props, which
// are essentially just custom attributes
const ParentExample = () => <ChildExample link="http://google.com" text="Go to google" />
