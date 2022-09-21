import ILink from "../../interfaces/ILink";

export const mockLink: ILink = {
  id: 1,
  url: "www.betrybe.com",
  label: "Site da Trybe",
  userId: 2
}

export const mockLinkCreate: ILink = {
  url: "www.betrybe.com",
  label: "Site da Trybe",
  userId: 2
}

export const mockLinkCreateInvalid: ILink = {
  "url": "www.betrybe.com",
  "label": "Site da Trybe",
  "userId": 1.2
}

export const mockLinkArray: ILink[] = [
  {
    id: 1,
    url: "www.flamengo.com",
    label: "Site Oficial do Flamengo",
    userId: 1
  },
  {
    id: 2,
    url: "www.betrybe.com",
    label: "Site da Trybe",
    userId: 3
  }
]
