import { Container, Description, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from "./Profile.styles";

export function Profile(user) {
    return <Container>
                <Description>
                    <Avatar src={user.avatar}/>
                    <Name>{user.name}</Name>
                    <Tag>@{user.tag}</Tag>
                    <Location>{user.location}</Location>
                </Description> 
                <Stats>
                    <StatsItem>
                        <Label>Folowers</Label>
                        <Quantity>{user.stats.followers}</Quantity>
                    </StatsItem>
                    <StatsItem>
                        <Label>Views</Label>
                        <Quantity>{user.stats.views}</Quantity>
                    </StatsItem>
                    <StatsItem>
                        <Label>Likes</Label>
                        <Quantity>{user.stats.views}</Quantity>
                    </StatsItem>
                </Stats>
            </Container>
}