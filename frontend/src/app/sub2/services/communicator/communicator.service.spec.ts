import { TestBed } from "@angular/core/testing";

import { CommunicatorService } from "./communicator.service";

describe("CommunicatorService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CommunicatorService = TestBed.get(CommunicatorService);
    expect(service).toBeTruthy();
  });

  it("has an initial value of 0", () => {
    const service: CommunicatorService = TestBed.get(CommunicatorService);
    expect(service.clickCount).toEqual(0);
  });

  it("can increment value", () => {
    const service: CommunicatorService = TestBed.get(CommunicatorService);
    service.increment();
    service.increment();
    service.increment();
    expect(service.clickCount).toEqual(3);
  });

  it("can reset value", () => {
    const service: CommunicatorService = TestBed.get(CommunicatorService);
    service.increment();
    service.increment();
    service.increment();
    expect(service.clickCount).toEqual(3);
    service.reset();
    expect(service.clickCount).toEqual(0);
  });
});
