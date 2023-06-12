import React  from "react";

// import styles
import StaffComponent from "./StaffComponent"


function Staff(){

    
    return(
        <>
            <StaffComponent
                id = "Staff1"
                name = "Reda F."
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eleifend tellus, condimentum sollicitudin ipsum. Curabitur pretium dignissim quam. Praesent imperdiet rutrum cursus. Pellentesque scelerisque id quam vel eleifend. Duis ex mauris, gravida gravida malesuada eget, tristique at elit. Donec porttitor enim eget nunc lacinia gravida. Fusce volutpat porttitor neque, sit amet consectetur leo. Mauris vitae magna sed est vehicula consectetur. Nam condimentum nulla massa, pharetra egestas nisi aliquam at."
                function = "Tech Director"
                cid = "1167822"
            />
            

        </>
    )
}

export default Staff;