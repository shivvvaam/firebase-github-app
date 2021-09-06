import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
    const [repos, setRepos] = useState([]);

    const fetchRepos = async () => {
        // why data not response because response contain response.status, response.data and we need response.data that's why directly import data
        const { data } = await Axios.get(repos_url);
        setRepos(data)
    }
    // It include a callback and a trigger point. As soon as I grabed URL useEffect will bw kicked in and will run method fetchRepos
    useEffect(() => {
        fetchRepos()
    }, [repos_url])

    return (
        <ListGroup>
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                    <div className="text-primary">{repo.name}</div>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )

}
export default Repos;