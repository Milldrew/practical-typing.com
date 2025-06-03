import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FingersSvgComponent} from './fingers-svg.component';
import {KEY_TO_FINGER_CONFIG_MAP} from './finger-svg.constants';

describe('FingersSvgComponent', () => {
  let component: FingersSvgComponent;
  let fixture: ComponentFixture<FingersSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingersSvgComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(FingersSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('L keystroke shift with pinky, and l with right ring finger', () => {
    const lFingerConfig = KEY_TO_FINGER_CONFIG_MAP['L']
    expect(lFingerConfig.rightHand).not.toBeNull()
    if (lFingerConfig.rightHand) {
      expect(lFingerConfig.rightHand.key).toBe('L')
      expect(lFingerConfig.rightHand.finger).toBe('ring')
    } else {
      expect(lFingerConfig.rightHand).toBeTruthy()
      expect(lFingerConfig.leftHand).toBeTruthy()
    }
  })
  it('O keystorke should use the right ring finger', () => {
    const oFingerConfig = KEY_TO_FINGER_CONFIG_MAP['O']
    if (oFingerConfig && oFingerConfig.rightHand) {
      expect(oFingerConfig.rightHand.finger).toBe('ring');
    } else {
      expect(oFingerConfig.rightHand).toBeTruthy()
      expect(oFingerConfig.leftHand).toBeTruthy()
    }
  })
  it('P keystorke should use the right pinky finger', () => {
    const pFingerConfig = KEY_TO_FINGER_CONFIG_MAP['P']
    if (pFingerConfig && pFingerConfig.rightHand) {
      expect(pFingerConfig.rightHand.finger).toBe('pinky');
    } else {
      expect(pFingerConfig.rightHand).toBeTruthy()
      expect(pFingerConfig.leftHand).toBeTruthy()
    }
  })
  it('R keystorke should use the left pointer finger', () => {
    const rFingerConfig = KEY_TO_FINGER_CONFIG_MAP['R']
    if (rFingerConfig && rFingerConfig.leftHand) {
      expect(rFingerConfig.leftHand.finger).toBe('pointer');

    } else {
      expect(rFingerConfig.rightHand).toBeTruthy()
      expect(rFingerConfig.leftHand).toBeTruthy()
    }
  })
  it('S keystorke should use the left ring finger', () => {
    const sFingerConfig = KEY_TO_FINGER_CONFIG_MAP['S']
    if (sFingerConfig && sFingerConfig.leftHand) {
      expect(sFingerConfig.leftHand.finger).toBe('ring');
    } else {
      expect(sFingerConfig.rightHand).toBeTruthy()
      expect(sFingerConfig.leftHand).toBeTruthy()
    }
  })
  it('T keystorke should use the right pinky finger and left pointer', () => {
    const sFingerConfig = KEY_TO_FINGER_CONFIG_MAP['T']
    if (sFingerConfig && sFingerConfig.leftHand && sFingerConfig.rightHand) {
      expect(sFingerConfig.leftHand.finger).toBe('pointer');
      expect(sFingerConfig.rightHand.finger).toBe('pinky');
    } else {
      expect(sFingerConfig.rightHand).toBeTruthy()
      expect(sFingerConfig.leftHand).toBeTruthy()
    }
  })
  it('U keystorke should use the left pinky finger and the right pointer', () => {
    const uFingerConfig = KEY_TO_FINGER_CONFIG_MAP['U']
    if (uFingerConfig && uFingerConfig.leftHand && uFingerConfig.rightHand) {
      expect(uFingerConfig.leftHand.finger).toBe('pinky');
      expect(uFingerConfig.rightHand.finger).toBe('pointer');
    } else {
      expect(uFingerConfig.rightHand).toBeTruthy()
      expect(uFingerConfig.leftHand).toBeTruthy()
    }

  })
  it('V keystorke should use the left pointer finger and the right pinky', () => {
    const vFingerConfig = KEY_TO_FINGER_CONFIG_MAP['V']
    if (vFingerConfig && vFingerConfig.leftHand && vFingerConfig.rightHand) {
      expect(vFingerConfig.leftHand.finger).toBe('pointer');
      expect(vFingerConfig.rightHand.finger).toBe('pinky');
    } else {
      expect(vFingerConfig.rightHand).toBeTruthy()
      expect(vFingerConfig.leftHand).toBeTruthy()
    }

  })
  it('W keystorke should use the left ring finger and the right pinky', () => {
    const vFingerConfig = KEY_TO_FINGER_CONFIG_MAP['W']
    if (vFingerConfig && vFingerConfig.leftHand && vFingerConfig.rightHand) {
      expect(vFingerConfig.leftHand.finger).toBe('ring');
      expect(vFingerConfig.rightHand.finger).toBe('pinky');
    } else {
      expect(vFingerConfig.rightHand).toBeTruthy()
      expect(vFingerConfig.leftHand).toBeTruthy()
    }
  })
  it('Z keystorke should use the left pinky finger and the right pinky', () => {
    const zFingerConfig = KEY_TO_FINGER_CONFIG_MAP['Z']
    if (zFingerConfig && zFingerConfig.leftHand && zFingerConfig.rightHand) {
      expect(zFingerConfig.leftHand.finger).toBe('pinky');
      expect(zFingerConfig.rightHand.finger).toBe('pinky');

    } else {
      expect(zFingerConfig.rightHand).toBeTruthy()
      expect(zFingerConfig.leftHand).toBeTruthy()
    }
  })
  //special character issues
  // asterisk, middle instead of pointer on right hand
  // vertical bar left hand should be pinky
  //
  it('* keystorke should use the left pinky finger and the right middle', () => {
    const astriskFingerConfig = KEY_TO_FINGER_CONFIG_MAP['*']
    if (astriskFingerConfig && astriskFingerConfig.leftHand && astriskFingerConfig.rightHand) {
      expect(astriskFingerConfig.leftHand.finger).toBe('pinky');
      expect(astriskFingerConfig.rightHand.finger).toBe('middle');
    } else {
      expect(astriskFingerConfig.rightHand).toBeTruthy()
      expect(astriskFingerConfig.leftHand).toBeTruthy()
    }

  })
  it('| keystorke should use the right pinky finger and the left pinky', () => {
    const verticalBarFingerConfig = KEY_TO_FINGER_CONFIG_MAP['|']
    if (verticalBarFingerConfig && verticalBarFingerConfig.leftHand && verticalBarFingerConfig.rightHand) {
      expect(verticalBarFingerConfig.leftHand.finger).toBe('pinky');
      expect(verticalBarFingerConfig.rightHand.finger).toBe('pinky');
    } else {
      expect(verticalBarFingerConfig.rightHand).toBeTruthy()
      expect(verticalBarFingerConfig.leftHand).toBeTruthy()
    }
  })
});
