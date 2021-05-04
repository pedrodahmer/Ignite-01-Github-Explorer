interface RepositoryItemProps{
    repository: {
        name: String;
        description: String;
        html_url: String;
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>{props.repository.description}</p>

            <a href="">
                {props.repository.html_url}
            </a>
        </li>
    )
}