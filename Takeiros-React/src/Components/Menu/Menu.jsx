import {useState, useEffect} from "react";

import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import categories from "./categories";

import "./Menu.css";


export default function Menu() {
    // TODO: currently using dummy data in categories.js. Fetch data
    //   from SpotOn.
    const widthToColumns = windowWidth => windowWidth >= 900 ? 3 : 1;
    const [columnsPerRow, setColumnsPerRow] = useState(widthToColumns(window.innerWidth));

    useEffect(() => {
        function watchWidth() {
            setColumnsPerRow(widthToColumns(window.innerWidth));
        }
        window.addEventListener("resize", watchWidth);
        return () => {
            window.removeEventListener("resize", watchWidth);
        }
    }, []);

    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };
    const rows = chunkArray(categories, columnsPerRow);

    const menuElements = rows.map((r, rIdx) => (
        <Row key={rIdx}>
            {r.map(o => (
                <Col key={o.id} className="menu-item">
                    <Card>
                            {o.image && <img
                                            className="menu-category-photo"
                                            alt={`${o.title} photo`}
                                            src={o.image}
                                        >
                                        </img>
                            }
                    <CardBody>
                        <CardTitle tag="h5">{o.title.toUpperCase()}</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    ));
    return (
        <div>
            {menuElements}
        </div>
    );
}