import { Card, CardBody, CardTitle } from "reactstrap";
import categories from "./categories";

import "./Menu.css"

export default function Menu() {
    // TODO: currently using dummy data in categories.js. Fetch data
    //   from SpotOn.
    const menuElements = categories.map(o => {
        return (
        <Card>
            <CardBody>
                <CardTitle>
                    {o.title.toUpperCase()}
                </CardTitle>
                {o.image && <img
                                className="menu-category-photo"
                                alt={`${o.title} photo`}
                                src={o.image}
                            >
                            </img>
                }
            </CardBody>
        </Card>);
    });
    return (
        <div>
            {menuElements}
        </div>
    );
}