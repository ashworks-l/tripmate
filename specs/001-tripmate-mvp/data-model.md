# Data Model: TripMate MVP

## Overview
The MVP persists a small relational model for user accounts, trip records, and trip activities. All data access is restricted to the authenticated user. Each trip must belong to the authenticated user, and each activity must belong to a trip owned by that user.

## Entities

### User
| Field | Type | Constraints | Notes |
|---|---|---|---|
| id | string | primary key, UUID or text id | Unique account identifier |
| email | string | unique, valid email format | Used for login and account identification |
| passwordHash | string | required | Password must be hashed and never stored in plain text |
| createdAt | datetime | required | Registration timestamp |
| updatedAt | datetime | required | Audit timestamp |

#### Relationships
- One user can have many trips.
- One user can have many activities indirectly through their trips.

### Trip
| Field | Type | Constraints | Notes |
|---|---|---|---|
| id | string | primary key | Unique trip identifier |
| userId | string | required, foreign key to User.id | Ownership linkage |
| title | string | required, non-empty | Trip name |
| destination | string | required, non-empty | Primary destination |
| startDate | date | required | Travel start date |
| endDate | date | required, endDate must be on or after startDate | Trip end date |
| notes | string | optional | Additional trip metadata |
| createdAt | datetime | required | Creation timestamp |
| updatedAt | datetime | required | Update timestamp |

#### Relationships
- Many trips belong to one user.
- One trip can contain many activities.
- Deleting a trip must also delete all related activities. This should be implemented with a database cascade delete or an equivalent reliable mechanism.

### Activity
| Field | Type | Constraints | Notes |
|---|---|---|---|
| id | string | primary key | Unique activity identifier |
| tripId | string | required, foreign key to Trip.id | Parent trip association |
| title | string | required, non-empty | Activity name |
| description | string | optional | Extra details |
| activityDate | date | required, must be within the trip date range | Planned date |
| time | string | optional | Planned time |
| location | string | optional | Activity location |
| createdAt | datetime | required | Creation timestamp |
| updatedAt | datetime | required | Update timestamp |

#### Relationships
- Many activities belong to one trip.
- An activity must belong to an existing trip.
- The trip must belong to the authenticated user.
- Activities are inaccessible when the owning trip is not owned by the current user.

## Validation Rules
- User email must be unique and valid.
- Trip title and destination are required.
- Trip startDate and endDate are required, and endDate must be on or after startDate.
- When a trip's dates are updated, all associated activities must remain within the new trip date range. Updates that would leave activities outside the new date range must be rejected or require those activities to be updated or removed first.
- Activity title is required and non-empty.
- activityDate is required and must be on or after the trip startDate.
- activityDate is required and must be on or before the trip endDate.
- An activity must belong to an existing trip.
- The trip must belong to the authenticated user.
- All writes must reject malformed payloads, invalid dates, or unauthorized ownership attempts.

## State Transitions

### User lifecycle
- Guest → register → authenticated user
- Authenticated user → logout → unauthenticated

### Trip lifecycle
- Draft / new trip → saved trip → visible in trip list
- Visible trip → updated trip → persisted with new values
- Visible trip → deleted → removed from list and related activities deleted

### Activity lifecycle
- New activity → created under trip
- Created activity → displayed in trip detail
- Activity → updated → persisted with revised fields
- Activity → deleted → removed from trip detail and no longer accessible

## Ownership Rules
- Users can only access their own trips and activities.
- Users can only read, update, or delete trips they own.
- Users can only read, update, or delete activities associated with trips they own.
- If a resource does not exist or does not belong to the authenticated user, the API must return 404.
- Cross-user access attempts must not expose resource contents or sensitive details.

## Deletion Behavior
- Deleting a trip must also delete all activities associated with that trip.
- This must be enforced using a database cascade delete or an equivalent reliable mechanism.
- Deleting an activity must remove only that activity and leave the owning trip intact.