import { Link } from 'react-router-dom'

import colorScheme from '../references/color-scheme'
import contents from '../references/contents'

export default () => (
    <div
        style = {{
            alignItems: 'center',
            backgroundColor: colorScheme.background,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100vh',
            minWidth: '100vw'
        }}
    >
        <h2
            style = {{
                color: colorScheme.title,
                textAlign: 'center'
            }}
        >
            {require('../../package.json').name}
        </h2>

        <p
            style = {{
                color: 'gray',
                marginTop: 5,
                textAlign: 'center'
            }}
        >
            Learning With Small Steps Visually
        </p>

        <p
            style = {{
                color: colorScheme.description,
                marginBottom: 25,
                marginTop: 50,
                textAlign: 'center'
            }}
        >
            Contents:
        </p>

        {
            contents.map((content, contentIndex) => (
                <Link
                    key = {content.id}
                    to = {content.routeName}
                    style = {{
                        textDecorationColor: 'white'
                    }}
                >
                    <p
                        style = {{
                            color: colorScheme.description,
                            marginTop: contentIndex == 0 ? 0 : 10,
                            textAlign: 'center'
                        }}
                    >
                        {content.title}
                    </p>
                </Link>
            ))
        }
    </div>
)