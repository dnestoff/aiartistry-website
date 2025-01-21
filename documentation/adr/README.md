# Architecture Decision Records (ADR)

## What is an ADR?
An Architecture Decision Record (ADR) is a document that captures an important architectural decision made along with its context and consequences. It provides a clear record of architectural decisions that were made, why they were made, and their impact.

## When to Write an ADR
Create a new ADR when you need to make an architectural decision that impacts:

- Structure (for example, patterns such as microservices)
- Non-functional requirements (security, high availability, and fault tolerance)
- Dependencies (coupling of components)
- Interfaces (APIs and published contracts)
- Construction techniques (libraries, frameworks, tools, and processes)

## How to Create a New ADR

1. Copy the template from `adr_TEMPLATE.md`
2. Create a new file in this directory named `adr-title-with-dashes.md` where:
   - NNNN is a sequential number (e.g., 0001, 0002)
   - title-with-dashes is the title of the decision
3. Fill out all sections in the template
4. Submit the ADR for review as part of your pull request

## Links
- [Home page of the ADR GitHub organization](https://adr.github.io/)
- [AWS ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
- [Michael Nygard's ADR Template](https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/templates/decision-record-template-by-michael-nygard/index.md)
- [ADR Tools](https://github.com/npryce/adr-tools)
- [Why Write ADRs](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)