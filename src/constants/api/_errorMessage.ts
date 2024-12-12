/**
 * @description API 요청 시 상태코드 별 성공/실패 메시지
 */
export const API_MESSAGE = {
  INSTANCE: {
    CREATE: {
      201: "인스턴스를 성공적으로 생성했습니다",
      404: "시뮬레이션 혹은 템플릿의 아이디가 유효하지 않습니다 관리자에게 문의하세요",
      500: "유효하지 않은 데이터입니다 관리자에게 문의하세요",
      DEFAULT: "각 필드를 필수로 입력해주세요",
    },
    DELETE: {
      201: "인스턴스를 성공적으로 삭제했습니다",
      500: "인스턴스 삭제에 실패했습니다 관리자에게 문의하세요",
    },
    EXECUTE: {
      200: "인스턴스를 성공적으로 실행했습니다",
      500: "인스턴스 실행에 실패했습니다 관리자에게 문의하세요",
    },
    STOP: {
      200: "인스턴스를 성공적으로 중지했습니다",
      500: "인스턴스 중지에 실패했습니다 관리자에게 문의하세요",
    },
  },
  SIMULATION: {
    CREATE: {
      201: "시뮬레이션을 성공적으로 생성했습니다",
      409: "이미 존재하는 시뮬레이션 이름입니다",
      500: "데이터 저장 중 오류가 발생했습니다 관리자에게 문의하세요",
      DEFAULT: "시뮬레이션 이름과 설명을 입력해주세요",
    },
    DELETE: {
      201: "시뮬레이션을 성공적으로 삭제했습니다",
      403: "해당 시뮬레이션에 속한 인스턴스가 있어 시뮬레이션 삭제가 불가합니다",
      500: "시뮬레이션 삭제에 실패했습니다 관리자에게 문의하세요",
    },
    EXECUTE: {
      201: "시뮬레이션을 성공적으로 실행했습니다",
      500: "시뮬레이션 실행에 실패했습니다 관리자에게 문의하세요",
    },
    STOP: {
      201: "시뮬레이션을 성공적으로 중지했습니다",
      500: "시뮬레이션 중지에 실패했습니다 관리자에게 문의하세요",
    },
  },
  TEMPLATE: {
    DELETE: {
      201: "템플릿을 성공적으로 삭제했습니다",
      500: "템플릿 삭제에 실패했습니다 관리자에게 문의하세요",
    },
  },
};
