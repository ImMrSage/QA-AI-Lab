---
id: webhook-delivery-checks
language: en
source_language: mixed
authored_language: ru
title: "Webhooks: Events and Delivery Checks"
topic: api-testing
tags: [webhooks, events, idempotency, integrations]
format: practical-guide
learning_depth: MUST KNOW
reviewed: 2026-10-06
---

# Webhooks: Events and Delivery Checks

A webhook is an HTTP notification sent to a configured endpoint when a service event occurs. With polling, the recipient periodically asks about changes; with webhooks, the sender initiates the request. A webhook can be part of an API, not its opposite. The notification may contain event data or an identifier for subsequent API retrieval.

## Check matrix

| Scenario | Expected result |
| --- | --- |
| Event occurs | Correct type, object and payload |
| Repeated delivery | No repeated business action |
| Events arrive out of order | No incorrect state rollback |
| Endpoint unavailable | Retry and recovery match sender policy |
| Invalid signature | Untrusted event is not processed |
| Successful HTTP response | Durable acceptance; processing observed separately |

Retries depend on the provider: Stripe documents automatic attempts; GitHub documents recovery of missed deliveries. Assume neither exactly-once delivery nor inevitable loss after the first failure. Event or delivery IDs can support deduplication; their meaning follows the contract.

## Learning example

On participant registration, the receiver queues a welcome email. Check the normal event, a duplicate and worker failure after HTTP acknowledgment. Expect one email, a recoverable job and an outcome record. Acknowledging before durable storage can lose work; replay after failure can duplicate it.

Verify HTTPS and signatures using sender documentation, including raw body bytes where the algorithm requires them. CORS does not authenticate server-to-server requests. The source article's teaching PHP snippet is not a production-ready secured handler; parse JSON or form data according to Content-Type.

## Related materials

[HTTP headers](http-header-checks.md) · [HTTP status codes](http-status-codes.md).

## Sources

- [Михаил Полянин: «Что такое вебхук»](https://thecode.media/webhook/) — Russian, updated 2026-04-02; accessible text read, embedded images not independently reviewed.
- [GitHub: Webhook best practices](https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks) — English.
- [Stripe: Webhooks](https://docs.stripe.com/webhooks) — English.

The example and checks are educational; no live endpoint was created or tested.
