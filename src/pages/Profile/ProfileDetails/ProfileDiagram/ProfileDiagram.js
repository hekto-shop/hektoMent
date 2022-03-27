import styles from './ProfileDiagram.module.scss'

const ProfileDiagram = (props) => {
    return (
        <div className={`${styles['diagram-cont']} ${props.className}`}>

        </div>
    )
}

export default ProfileDiagram;