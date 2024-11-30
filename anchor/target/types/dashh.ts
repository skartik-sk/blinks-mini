/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/dashh.json`.
 */
export type Dashh = {
  "address": "5PrtiiJ1m6NmepQ7XD2ZmPKSw8o8RGVnFUuMUXLPcjfP",
  "metadata": {
    "name": "dashh",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "createCampaign",
      "discriminator": [
        111,
        131,
        187,
        98,
        160,
        193,
        114,
        244
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "campaign",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "campaignid"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "campaignid",
          "type": "u64"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "image",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "lable",
          "type": "string"
        },
        {
          "name": "endtime",
          "type": "u64"
        },
        {
          "name": "reward",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createParticipent",
      "discriminator": [
        71,
        8,
        24,
        190,
        154,
        238,
        185,
        114
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "participent",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "campaignid"
              },
              {
                "kind": "arg",
                "path": "useraccount"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "campaignid",
          "type": "u64"
        },
        {
          "name": "useraccount",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updatedParticipent",
      "discriminator": [
        53,
        236,
        20,
        147,
        92,
        1,
        150,
        117
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "participent",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "campaignid"
              },
              {
                "kind": "arg",
                "path": "useraccount"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "campaignid",
          "type": "u64"
        },
        {
          "name": "useraccount",
          "type": "pubkey"
        },
        {
          "name": "points",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "campaign",
      "discriminator": [
        50,
        40,
        49,
        11,
        157,
        220,
        229,
        192
      ]
    },
    {
      "name": "participent",
      "discriminator": [
        44,
        209,
        38,
        30,
        148,
        88,
        55,
        251
      ]
    }
  ],
  "types": [
    {
      "name": "campaign",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "image",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "lable",
            "type": "string"
          },
          {
            "name": "endtime",
            "type": "u64"
          },
          {
            "name": "reward",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "participent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "points",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
