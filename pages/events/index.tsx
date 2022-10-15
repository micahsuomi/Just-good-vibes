import React from "react";
import { client } from "../../helpers/createClient";
import styled from "styled-components";

import { Events, Event } from "../../types";
import { EventItem, Layout } from "../../components";
import { StyledContent } from "../../styles/SharedStyles";

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: "event" });
  return {
    props: {
      events: items,
    },
  };
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 0;
`;

export default function EventsPage({ events }: Events) {
  return (
    <Layout>
      <StyledContent>
        <StyledGrid>
          {events.map((event: Event) => (
            <EventItem event={event} key={event.sys.id}/>
          ))}
        </StyledGrid>
      </StyledContent>
    </Layout>
  );
}
